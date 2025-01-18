import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';

@NgModule({
	imports: [
		CommonModule,
		RoleRoutingModule,
		ButtonModule,
		RippleModule,
		SplitButtonModule,
		ToggleButtonModule,
	],
	declarations: [RoleComponent]
})
export class RoleModule { }
