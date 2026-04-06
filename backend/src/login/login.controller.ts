import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService) {}

    @Post()
    login(@Body() body: { email?: string; password?: string }, @Res() res) {
        console.log(body);
        if (!body?.email || !body?.password){
            return res.status(401).json({ status: 401, message: 'Invalid email or password' });
        }
        const loginResult = this.loginService.login(body.email, body.password);
        if (loginResult.success) {
            return res.json({status: 200,  message: 'Login successful' });
        } else {
            return res.status(401).json({ status: 401, message: 'Invalid email or password' });
        }
    }
}
