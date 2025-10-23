import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiveComponent } from './five/five.component';
import { EighthComponent } from './eighth/eighth.component';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    FiveComponent,
    EighthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    FormsModule,
    JsonPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
