import { Component, OnInit } from '@angular/core';
import { Bill } from '../../models/bill.model';
import { BillService } from '../../services/bill.service';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs/operators';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = '';
  users: User[] = [];
  bills: Bill[] = [];
  value = '';
  title = '';
  selectedFriend: string;
  percent = 50;

  constructor(private _billService: BillService,
              private _loginSerivce: LoginService,
              private _userService: UserService) {
  }

  ngOnInit() {
    this.username = this._loginSerivce.username;

    this._billService.getBills()
      .subscribe(bills => {
        this.bills = bills;
      });

    this._userService.getUsers()
      .pipe(
        map(users => users.filter(user => user.username !== this.username))
      )
      .subscribe(users => {
        this.users = users;
      });
  }

  onBillCreate() {
    this._billService.createBill(this.title, parseInt(this.value, 10), this.percent, this.selectedFriend)
      .subscribe(result => {
        this.bills = this.bills.concat(result);

        this.title = '';
        this.value = '';
        this.selectedFriend = '';
        this.percent = 50;
      });
  }

}
