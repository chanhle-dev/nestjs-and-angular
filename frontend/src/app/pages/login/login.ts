import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = signal<string>('');
  private cdr = inject(ChangeDetectorRef);

  constructor(private router: Router, private readonly authService: AuthService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);
        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        console.error('Login failed:', error);
        this.error.set(error?.message || error?.error?.message || 'Unknown error');
        this.cdr.detectChanges();
      }
    });
  }
}

