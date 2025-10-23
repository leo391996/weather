import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { TotalService } from './total.service';
import {  OnInit} from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
constructor(
    public rout:Router,
    // public hello:TotalService,

   ) { };
ngOnInit(): void { };
gotovoew2(){
  this.rout.navigateByUrl('/news');
};
gotovoew3(){
  this.rout.navigateByUrl('/weather');
};
}
