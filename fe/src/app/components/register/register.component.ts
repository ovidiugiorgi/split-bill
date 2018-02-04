import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
  }

  onRegister() {
    this._userService.create(this.username, this.password)
      .subscribe(result => {
        if (result && result['data']) {
          console.log(result['data']);
        }
      });
  }

}
