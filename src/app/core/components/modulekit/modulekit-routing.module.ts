import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'role', data: { breadcrumb: 'Role' }, loadChildren: () => import('./role/role.module').then(m => m.RoleModule) },
        { path: 'user', data: { breadcrumb: 'Usuarios' }, loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    ])],
    exports: [RouterModule]
})
export class RoleRoutingModule { }
