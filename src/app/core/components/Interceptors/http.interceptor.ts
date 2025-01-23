import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomMessageService } from '../../service/message.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private customMessageService: CustomMessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          // Error del lado del cliente
          console.error('Error del cliente:', error.error.message);
        } else {
          // Error del lado del servidor
          console.error(`Error del servidor: Código ${error.status}, Mensaje:`, error.error);

          if (error.status === 0) {
            // Error de conexión
            this.customMessageService.showError('Error de conexión con el servidor. Verifica tu conexión a Internet.');
          } else if (error.error?.mensaje) {
            // Mostrar el mensaje personalizado del servidor
            this.customMessageService.showError(error.error.mensaje);
          } else {
            // Mensaje por defecto si no hay información en el error
            this.customMessageService.showError('Ocurrió un error inesperado.');
          }
        }

        // Propagar el error completo (incluyendo el cuerpo) para que pueda manejarlo el componente
        return throwError(() => error);
      })
    );
  }
}