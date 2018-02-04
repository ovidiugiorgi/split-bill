import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private _loginService: LoginService) {
  }

  ngOnInit() {
  }

  onLogin() {
    this._loginService.login(this.username, this.password)
      .subscribe(result => {
        if (result) {
          console.log(result);
        }
      });
  }

}
