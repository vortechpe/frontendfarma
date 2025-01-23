import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit {
  objectForm: FormGroup;
  objectDialog: boolean = false;
  titleForm: string = '';
  data: any[] = [];
  tipoPersona: any[] | undefined;
  tipoEntidad: any[] | undefined;
  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
    this.onCreateForm();
    this.tipoPersona = [
      { value: 'Cliente', id: '1' },
      { value: 'Empleado', id: '2' },
      { value: 'Proveedor', id: '2' },
    ];
    this.tipoEntidad = [
      { value: 'Persona Natural', id: '1' },
      { value: 'Persona Jurídica', id: '2' },
    ];
  }
  onCreateForm() {
    this.objectForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      tipoPersonaID: ['', [Validators.required, Validators.maxLength(9)]],
      tipoEntidadID: ['', [Validators.required]],
      documentoIdentidad: ['', [Validators.required]],
      razonSocial: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required]],
      activo: [true, [Validators.required]]
    });
  }

  create(){
    this.titleForm = 'Crear Presona'
    this.objectDialog =true;
  }
  onCreate(){
    

  }
  loadRolesLazy(event:any){}

}
