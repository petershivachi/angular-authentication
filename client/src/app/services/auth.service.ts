import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private registerUrl = 'http://localhost:5000/api/register';
  private loginUrl = 'http://localhost:5000/api/login';

  registerUser(user){
    return this.http.post<any>(this.registerUrl, user);
  }

  loginUser(user){
    return this.http.post<any>(this.loginUrl, user);
  }

  loggenIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/events'])
  }
}
