import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FiveComponent } from './five/five.component';
import { EighthComponent } from './eighth/eighth.component';
const routes: Routes = [
  {path:'main',component:AppComponent }, //main
  {path:'weather',component:FiveComponent}, //weather
  {path:'news',component: EighthComponent}, //news
  {
    path: '**',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
