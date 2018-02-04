import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private _loginService: LoginService, private _router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
    this._loginService.login(this.username, this.password)
      .subscribe(result => {
        if (result) {
          this._router.navigate(['/home']);
        }
      });
  }

  onCreateAccount() {
    this._router.navigate(['/register']);
  }

}
