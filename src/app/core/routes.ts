import { LoginComponent } from './administrador/login/login.component';
export const routes = [
  // Not lazy-loaded routes
  { path: 'login', component: LoginComponent },
  // Not found
  { path: '**', redirectTo: 'login' },
];
