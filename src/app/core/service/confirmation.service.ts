import { Injectable } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class CustomConfirmationService {
  
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

 
  confirm(options: {
    message: string;
    header: string;
    icon: string;
    acceptLabel?: string;
    rejectLabel?: string;
    acceptCallback?: () => Promise<void>;
    rejectCallback?: () => void;
  }) {
    this.confirmationService.confirm({
      message: options.message,
      header: options.header,
      icon: options.icon,
      accept: () => {
        // Ejecuta la callback de aceptación y maneja la lógica asíncrona
        if (options.acceptCallback) {
          // Ejecutamos la función de aceptación
          options.acceptCallback().then(() => {
            // Solo se muestra el mensaje después de que la acción se haya completado
            this.messageService.add({
              severity: 'info',
              summary: 'Confirmed',
              detail: 'Action confirmed',
            });
          }).catch((error) => {
            // Manejo de errores si la promesa rechaza
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'There was an issue confirming the action.',
            });
          });
        }
      },
      reject: () => {
        if (options.rejectCallback) {
          options.rejectCallback();
          
        }
        
      },
    });
  }
  // Agrega otros métodos según tus necesidades (info, warning, etc.)
}
