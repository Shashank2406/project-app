import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  hello:string;
  public a:Object={ };
  constructor(public fetch:ConnectService) { }

  ngOnInit() {
    this.hello="hello";
    // this.fetchgit()
  }
 fetchgit(){
    this.fetch.getdetails().subscribe(b => {
      console.log(b);
      this.a=b;
    })
    
  }


}
