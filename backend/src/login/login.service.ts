import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
    login(email: string, password: string) {
        if (email === 'user@example.com' && password === 'password') {
            // Dummy login logic
            console.log('Login successful');
            return { success: true, message: 'Login successful', token: 'dummy-jwt-token' };
        } else {
            console.log('Login failed');
            return { success: false, message: 'Invalid email or password' };
        }
    }
}
