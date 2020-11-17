import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(
    private _auth: AuthService,
    private _router: Router
    ) { }

  registerUserData = {
    email: '',
    password: ''
  }

  onRegister(){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        //console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/auth-events'])
      },
      err => console.log(err)
    )
  }

  ngOnInit(): void {
  }

}
