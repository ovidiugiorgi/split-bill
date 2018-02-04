import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BillService } from './services/bill.service';
import { LoginGuard } from './guards/login.guard';
import { UserService } from './services/user.service';
import { BillItemComponent } from './components/bill-item/bill-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatListModule, MatProgressBarModule,
  MatSliderModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    BillItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ]),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressBarModule
  ],
  providers: [LoginService, LoginGuard, BillService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
