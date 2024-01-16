import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
constructor(public service: UserService,private spinner: NgxSpinnerService){}

ngOnInit(): void {
  this.openSpinner();
}
// spinner start
openSpinner(){
  this.spinner.show();
  timer(2000).subscribe(() => {
    this.spinner.hide();
  });}
}
