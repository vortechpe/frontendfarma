import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Modulos',
                items: [
                    { label: 'Roles', icon: 'pi pi-fw pi-id-card', routerLink: ['/dashboard/module/role'] },
                    { label: 'Usuarios', icon: 'pi pi-fw pi-id-card', routerLink: ['/dashboard/module/user'] },
                ]
            }
        ]
    }
}
