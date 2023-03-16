import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import {NgForm} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'task-completion';
  date_start:any;
  dated:any;
  datef:any;
  nbj=0;
  date_end:any;
  myDate=new Date(Date.now());

  constructor(private datePipe:DatePipe){}

  ngOnInit():void{
    this.date_start=this.datePipe.transform(this.myDate,'yyyy-MM-dd');

  }
  cal(){
    this.dated=new Date(this.date_start).getTime();

    this.datef=this.dated+(this.nbj*(86400000));
    this.date_end=this.datePipe.transform(this.datef,'yyyy-MM-dd');
  }
}



