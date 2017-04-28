import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class ConnectService {
  public name:string="";
  constructor(private httpService: Http) { 
    // this.name="anshdesire";
  }
    
  getdetails(): Observable<any>{
    console.log(this.name);
    var a:string='https://api.github.com/users/';
    var b:string=this.name.trim();
    a=a+b;
    //a.replace('%20', "");
    console.log(a);
    return this.httpService.get(a).map(
      data => data.json()
    );
  }
  setuser(dat)
  {
     this.name=dat;
  }

}