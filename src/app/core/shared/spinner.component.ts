import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/core/service/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
    <div *ngIf="spinner$ | async" class="overlay">
      <p-progressSpinner styleClass="my-spinner" [strokeWidth]="8"></p-progressSpinner>
    </div>
  `,
  styles: [`
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1150;
    }
  `]
})
export class SpinnerComponent {
  spinner$ = this.spinnerService.spinner$;

  constructor(private spinnerService: SpinnerService) {}
}
