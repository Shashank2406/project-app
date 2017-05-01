import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-prodet',
  templateUrl: './prodet.component.html',
  styleUrls: ['./prodet.component.css']
})
export class ProdetComponent implements OnInit {
  public pro:string;
  constructor(public pro1:ConnectService) { }
  public b:Object={ };
  ngOnInit() {
    this.pro="";
  }
  check(form)
  {
    this.pro1.getprodat(form.value.project).subscribe(a=>{
      // console.log(a.items[0])
      this.b=a;
      console.log(a.items[0].id);
      console.log(this.b);
      
  }
    
    );
  }
}
