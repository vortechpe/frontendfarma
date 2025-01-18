import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner'; // Si usas PrimeNG

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule, // Necesario para el pipe async
    ProgressSpinnerModule // Para usar p-progressSpinner
  ],
  exports: [SpinnerComponent], // Para poder usarlo en otros módulos
})
export class SpinnerModule {}
