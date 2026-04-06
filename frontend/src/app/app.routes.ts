import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login';
import { HomeComponent } from './pages/home/home';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [authGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full' }
];
