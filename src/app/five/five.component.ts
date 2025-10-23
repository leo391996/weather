import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  public apikey="ec96c85f92a828170038644bfdc3fd62";
  // public url= https://api.openweathermap.org/data/2.5/weather;
  // public url='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
  public humidity:number | undefined;
  public  temperature: number| undefined;
  public cityname:string| undefined;
  public city:string| undefined;

constructor(public rout:Router,private http:HttpClient) { }
ngOnInit(): void { };

value(wow:any){
  this.city=wow.target.value;
};
public hello(){
   this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}`).subscribe(
        (res)=>{ 
            // console.log(res.main.humidity)
            // console.log(res.main.temp-(273.15 ))
            this.humidity= res.main.humidity
            this.temperature=res.main.temp-(273.15 )
            this.cityname=res.name
            // console.log(res.name)
  })
}; 
}
