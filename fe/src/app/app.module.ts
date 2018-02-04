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


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
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
    NgbModule.forRoot()
  ],
  providers: [LoginService, LoginGuard, BillService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
