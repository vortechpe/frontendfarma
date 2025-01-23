import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PersonComponent } from './person.component';
import { PersonRoutingModule } from './person-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    imports: [
        PersonRoutingModule,
        CommonModule,
        ButtonModule,
        RippleModule,
        SplitButtonModule,
        ReactiveFormsModule,
        ToggleButtonModule,
        ToolbarModule,
        InputTextModule,
        TableModule,
        ConfirmDialogModule,
        DropdownModule,
        DialogModule,
        ToastModule,
        PasswordModule
    ],
    declarations: [PersonComponent]
})
export class PersonModule { }
