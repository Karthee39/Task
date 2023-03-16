import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DatePipe} from '@angular/common';
import {MAT_DIALOG_DATA,MatDialogRef} from "@angular/material/dialog";
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
 
  providers: [DatePipe,{provide:MAT_DIALOG_DATA,useValue:{},},
    {provide:MatDialogRef,useValue:{}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
