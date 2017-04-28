import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-prodet',
  templateUrl: './prodet.component.html',
  styleUrls: ['./prodet.component.css']
})
export class ProdetComponent implements OnInit {

  constructor(public pro:ConnectService) { }
  public b:Object={ };
  ngOnInit() {
    this.fetchpro();
  }
  fetchpro()
  {
      this.pro.getprodat().subscribe(a=>{
      console.log(a)
      this.b=a;}
      
      );
  }
}
