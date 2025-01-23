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

    list(numberPage:number, size: number, sortField:string){
      return this.http.get<any>(`${this.apiUrl}/User?pageNumber=${numberPage}&pageSize=${size}&sortField=${sortField}` ,{ withCredentials: true });
    }
    delete(data:any){
      return this.http.delete<any>(`${this.apiUrl}/User/${data}`,{withCredentials:true});
    }
    create(data:{Nombre:'',Email:'',Telefono:'',UserName:'',Password:''}){
      return this.http.post<any>(`${this.apiUrl}/User`,data,{withCredentials:true});
    }
    getUser(data:any){
      return this.http.get<any>(`${this.apiUrl}/User/${data}`,{withCredentials:true})
    }
    update(data:{Nombre:'',Email:'',Telefono:'',UserName:'',Password:''},id: string){
      return this.http.put<any>(`${this.apiUrl}/${id}`, data);
    }
}
