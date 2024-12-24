import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

import {AuthResponse} from "../model/auth-response";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  redirectUrl: string= "/login";
  isAuth():boolean{
    const token  = localStorage.getItem('token');
    if(token){
      return true
    }else{
      return false;
    }
  }

  constructor(
    private http: HttpClient,
  ) { }

  getLogin(request:any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>("https://localhost:8080/api/login", request);
  }
  isAuthenticated(): boolean {
    // Vérifiez si le token est présent dans le localStorage ou selon votre logique d'authentification
    return !!localStorage.getItem('token');
  }

}
