import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService) { }

    @Post()
    login(@Body() { email, password }: { email?: string; password?: string }, @Res() res) {
        if (!email || !password) {
            return res.status(401).json({ status: 401, message: 'Invalid email or password' });
        }
        const loginResult = this.loginService.login(email, password);
        if (loginResult.success) {
            return res.json({ status: 200, ...loginResult });
        } else {
            return res.status(401).json({ status: 401, ...loginResult });
        }
    }
}
