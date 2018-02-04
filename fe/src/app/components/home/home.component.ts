import { Component, OnInit } from '@angular/core';
import { Bill } from '../../models/bill.model';
import { BillService } from '../../services/bill.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bills: Bill[] = [];
  title = '';

  constructor(private _billService: BillService) {
  }

  ngOnInit() {
    this._billService.getBills()
      .subscribe(bills => {
        this.bills = bills;
      });
  }

  onBillCreate() {
    this._billService.createBill(this.title)
      .subscribe(result => {
        console.log(result);
      });
  }

}
