import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor(public send:ConnectService) { }
  user:string;
  ngOnInit() {
    this.user=" ";
  }
  check(form)
  {
    console.log(form.value.username);
    this.send.setuser(form.value.username);
  }
  
}
