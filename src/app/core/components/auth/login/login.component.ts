import { environment } from './../../../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/core/service/spinner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit {

    valCheck: string[] = ['remember'];
    loginError: string = '';
    email: string = '';
    spinner:boolean=false;
    password: string = '';
    tittle: string= environment.title
    objectForm :FormGroup;

    constructor(public layoutService: LayoutService, private  authService: AuthService,private router:Router,    private spinnerService: SpinnerService, private fb: FormBuilder) {}
 
    ngOnInit(): void {
      this.objectForm = this.fb.group({
        password: ['', [Validators.required]],
        email: ['', [Validators.required]]
      });
    }

   

    auth(){
      this.spinnerService.show();
      if (!this.objectForm.valid) {
        this.objectForm.markAllAsTouched(); // Marca todos los campos como tocados
        this.spinnerService.hide();
        return;
      }
         
        this.authService.auth(this.objectForm.value).subscribe(
            (response) => {
              // Si el login es exitoso, el backend debería haber enviado los tokens
              console.log('Login exitoso', response);
              this.spinnerService.hide();
              this.router.navigate(['/dashboard']);  // Redirige al usuario a la página principal, por ejemplo
            },
            (error) => {
              
              // Si ocurre un error (login incorrecto, por ejemplo)
              this.spinnerService.hide();
              this.loginError = 'Credenciales inválidas. Por favor, intente nuevamente.';
              console.error('Error en el login', error);
            }
          );

    }
}
