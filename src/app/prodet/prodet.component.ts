import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-prodet',
  templateUrl: './prodet.component.html',
  styleUrls: ['./prodet.component.css']
})
export class ProdetComponent implements OnInit {
  pro:string;
  constructor(public pro1:ConnectService) { }
  public b:Object={ };
  ngOnInit() {
    this.pro="";
  }
  check(form)
  {
    alert(form.value.project)
    this.pro1.getprodat(form.value.project).subscribe(a=>{
      console.log(a)
      this.b=a;}
      
    );
  }
}
