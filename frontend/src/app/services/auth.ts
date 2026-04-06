import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { email } from '@angular/forms/signals';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient); // Modern injection
  private readonly API_URL = '/api/login';

  // constructor(private readonly http: HttpClient) {}
  // Using a Signal to track auth state (modern Angular approach)
  private _isLoggedIn = signal<boolean>(false);

  // Read-only getter for the signal
  isLoggedIn = this._isLoggedIn.asReadonly();

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.API_URL, { email, password }).pipe(
      tap((response) => {
        console.log('Login successful:', response);
        this._isLoggedIn.set(true);
        localStorage.setItem('token', 'dummy-token');
      }),
      catchError((error) => {
        this._isLoggedIn.set(false);
        // Extract backend error message if present
        const backendMsg = error?.error?.message || error.message || 'Login failed';
        return throwError(() => new Error(backendMsg));
      })
    );
  }

  logout() {
    this._isLoggedIn.set(false);
    localStorage.removeItem('token');
  }

  checkAuthStatus(): boolean {
    // Check if token exists on app load
    const hasToken = !!localStorage.getItem('token');
    this._isLoggedIn.set(hasToken);
    return hasToken;
  }
}
