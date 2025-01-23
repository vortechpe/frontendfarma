import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { finalize, Subject, takeUntil, tap } from 'rxjs';
import { CustomConfirmationService } from 'src/app/core/service/confirmation.service';
import { CustomMessageService } from 'src/app/core/service/message.service';
import { SpinnerService } from 'src/app/core/service/spinner.service';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
    private unsubscribe$ = new Subject<void>();
    data: any[] = [];
    objectForm : FormGroup;
    objectDialog:boolean=false;
    update:boolean=false;
    titleForm:string='';
    userId:any;
    constructor(private customConfirmationService: CustomConfirmationService,private messageService : CustomMessageService,private userService: UserService, private spinnerService: SpinnerService, private fb:FormBuilder){
        
    }
    ngOnInit(): void {
      this.onCreateForm();
      this.loadRolesLazy({ first: 0, rows: 5 , sortField:""})
    }

    onCreateForm(){
      this.objectForm = this.fb.group({
        nombre: ['', [Validators.required]],
        email: ['', [Validators.required]],
        telefono: ['', [Validators.required, Validators.maxLength(9)]],
        userName: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });
      
    }

    filterGlobal(filter:any){
      this.loadRolesLazy({ first: 0, rows: 5 , sortField:filter})
    }
    loadRolesLazy(event: any) {
      this.spinnerService.show();
      const page = (event.first / event.rows ) + 1;
      const sortField = (event.sortField) || ''
      this.userService.list(page, event.rows,sortField).pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (response) => {
          this.data = response.items;
          this.spinnerService.hide();
        },
        (error) => {
          console.error('Error loading data:', error);
          this.spinnerService.hide();
        }
      );
  }
  create(){
    this.titleForm = 'Creación de usuario'
    this.objectForm.reset();
    this.objectDialog =true;
  }
  
  getUser(data: any): void {
    this.objectForm.get('password')?.setValidators(null); // Quitar validaciones
    this.objectForm.get('password')?.disable();
    this.objectForm.get('password')?.updateValueAndValidity(); // Actualizar
    this.titleForm = 'Actualizar Usuario'
    this.userId = data;
    this.userService.getUser(data)
      .pipe(
        takeUntil(this.unsubscribe$), // Cancela la suscripción si el componente se destruye
        tap((response) => {
          // Solo maneja la respuesta exitosa
          this.objectForm.patchValue(response);
          this.objectDialog = true;
        }),
        finalize(() => {
          // Siempre oculta el spinner, incluso si hay un error
         
        })
      )
      .subscribe({
        next: () => {
          // Lógica cuando la solicitud es exitosa
      
        },
        error: (err) => {
          // Manejo de errores si es necesario
          console.error('Error al obtener el usuario:', err);
          
        }
      });
  }
  onEdit(){
    this.spinnerService.show();
    this.userService.update(this.objectForm.value,this.userId).subscribe({
      complete: () => {
        this.messageService.showSuccess('El Usuario ha sido registrado con éxito');
        this.spinnerService.hide();
      },
    });
  }
  onCreate(): Promise<void>{
    this.spinnerService.show();
    if (!this.objectForm.valid) {
      this.objectForm.markAllAsTouched(); // Marca todos los campos como tocados
      this.spinnerService.hide();
      return Promise.resolve(); 
    }
    return new Promise((resolve, reject) => {
      this.userService.create(this.objectForm.value).pipe(takeUntil(this.unsubscribe$)).subscribe(
        (response) => {
          this.loadRolesLazy({ first: 0, rows: 5, sortField: '' });
          this.spinnerService.hide();
          this.messageService.showSuccess('El Usuario ha sido registrado con éxito');
          this.objectDialog = false;
          resolve(); // Resuelve la promesa
        },
        (error) => {
      
          this.spinnerService.hide();
          reject(error); // Rechaza la promesa en caso de error
        }
      );
    });
  }
    
  
  delete(event: any) {
    this.customConfirmationService.confirm({
      message: 'Estás seguro de eliminar el registro?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      acceptLabel: 'Yes',
      rejectLabel: 'No',
      acceptCallback: () => {
        // Devuelve una promesa que representa la eliminación
        return this.onDelete(event);  // onDelete ahora debe devolver una promesa
      },
      rejectCallback: () => {
  
      },
    });
  }
  
  onDelete(data: any): Promise<void> {
    this.spinnerService.show();
    return new Promise((resolve, reject) => {
      this.userService.delete(data).pipe(takeUntil(this.unsubscribe$)).subscribe(
        (response) => {
          this.loadRolesLazy({ first: 0, rows: 5, sortField: '' });
          this.spinnerService.hide();
          resolve();  // Resuelve la promesa
        },
        (error) => {
          console.error('Error loading data:', error);
          this.spinnerService.hide();
          reject(error);  // Rechaza la promesa en caso de error
        }
      );
    });
  }

}
