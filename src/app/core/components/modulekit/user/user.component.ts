import { Component } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  templateUrl: './user.component.html',
})
export class UserComponent {

    constructor(private userService: UserService){
        userService.getUser('62022A0E-FCFB-4F4E-690E-08DD36E87164').subscribe( c =>{
            console.log(c)
        })
    }

}
