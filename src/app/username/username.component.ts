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
  public a:Object={ };
  ngOnInit() {
    this.user="";
  }
  check(form1)
  {
    console.log(form1.value.username);
    console.log(form1);
    this.send.setuser(form1.value.username);
    this.send.getdetails().subscribe(b => {
      //this.a=JSON.stringify(b);
      this.a=b;
      console.log(this.a);
    })
  }
  
}
