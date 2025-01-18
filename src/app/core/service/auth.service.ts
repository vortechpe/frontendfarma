import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    auth(email: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Auth/login`, { email, password },{ withCredentials: true });
    }
    refreshToken(): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/Auth/refresh-token`, {}, { withCredentials: true });
    }
}
