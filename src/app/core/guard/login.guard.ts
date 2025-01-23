import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; // Asegúrate de instalar ngx-cookie-service
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(): boolean | Observable<boolean> {
    const token = this.cookieService.get('JwtToken'); // Reemplaza 'JwtToken' con el nombre de tu cookie

    // Si la cookie de autenticación existe y estamos intentando acceder al login, redirigir al Dashboard
    if (token) {
        this.router.navigate(['/dashboard']); // Redirige al Dashboard
        return false; // Previene el acceso al login
    } 
    return true;
  }
}
