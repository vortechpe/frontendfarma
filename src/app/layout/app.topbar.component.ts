import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {



    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { }
    items: MenuItem[] | undefined;


    ngOnInit() {
        this.items = [

            {
                label: 'Acciones',
                icon: 'pi pi-cog',
                items: [
                    {
                        label: 'Perfil',
                        icon: 'pi pi-user',
                        shortcut: '⌘+S',
                    },
                    {
                        label: 'Cerrar Sesión',
                        icon: 'pi pi-power-off',
                        shortcut: '⌘+S',
                    }

                ],
            },
        ];
    }

}
