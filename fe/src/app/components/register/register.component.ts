import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;

  constructor(private _loginService: LoginService) {
  }

  ngOnInit() {
  }

  onRegister() {
    this._loginService.register(this.username, this.password)
      .subscribe(result => {
        if (result) {
          console.log(result);
        }
      });
  }

}
