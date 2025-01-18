import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        ButtonModule,
        RippleModule,
        SplitButtonModule,
        ToggleButtonModule,
    ],
    declarations: [UserComponent]
})
export class UserModule { }
