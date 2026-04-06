import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService) {}

    @Post()
    login(@Body() body: { email: string; password: string }, @Res() res) {
        const loginResult = this.loginService.login(body.email, body.password);
        if (loginResult.success) {
            return res.json({ message: 'Login successful' });
        } else {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
    }
}
