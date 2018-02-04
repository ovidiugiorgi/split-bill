import { Component, Input, OnInit } from '@angular/core';
import { Bill } from '../../models/bill.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-bill-item',
  templateUrl: './bill-item.component.html',
  styleUrls: ['./bill-item.component.css']
})
export class BillItemComponent implements OnInit {

  friend = '';
  isOwner = false;
  amountPaid = 0;
  percent = 100;

  _bill: Bill;
  get bill(): Bill {
    return this._bill;
  }

  @Input('bill')
  set bill(value: Bill) {
    this._bill = value;
    this.isOwner = this._bill.owner.username === this._loginService.username;
    this.friend = this._loginService.username === this._bill.owner.username ? this._bill.friend.username : this._bill.owner.username;
    this.amountPaid = this.isOwner ? this._bill.owner.amountPaid : this._bill.friend.amountPaid;
    this.percent = this.isOwner ? this._bill.owner.billPercent : (100 - this._bill.owner.billPercent);
  }

  constructor(private _loginService: LoginService) {
  }

  ngOnInit() {
  }

}
