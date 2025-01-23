import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; // Asegúrate de instalar ngx-cookie-service
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(): boolean | Observable<boolean> {
    const cookies = document.cookie;
    const token = this.cookieService.get('JwtToken'); // Reemplaza 'jwt' con el nombre de tu cookie

    if (!token) {
      // Si el token existe, permite el acceso
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
