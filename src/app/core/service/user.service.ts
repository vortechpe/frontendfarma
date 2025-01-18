import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getUser(guid:string){
        debugger;
        return this.http.get<any>(`${this.apiUrl}/User/${guid}` ,{ withCredentials: true });
    }
}
