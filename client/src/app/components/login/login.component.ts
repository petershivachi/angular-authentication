import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _auth: AuthService,
    private _router: Router
    ) { }

  loginUserData = {
    email: '',
    password: ''
  }

  onLogin(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        //console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/events'])
      },
      error => console.log(error)
      )
  }

  ngOnInit(): void {
  }

}
