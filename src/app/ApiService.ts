import { Injectable } from '@angular/core';
import { Headers, Http, Response,RequestOptions } from '@angular/http';
import {EventEmitter} from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ApiService {
  navchange: EventEmitter<string> = new EventEmitter();
  public islogin:Boolean;
  public count22:string; 
  public count33:string; 

  constructor(private http: Http) { }

  VChangeEvent(number) {
    this.navchange.emit(number);
  }

  getNavChangeEmitter() {
    return this.navchange;
  }

 public  SetCount(dd) {
this.count22 = dd;

  }

  public  SetCount2(dd) {
    this.count33 = dd;
    
      }


  public  GetCount() {
  return   this.count22;
    
      }

      
  public  GetCount2() {
    return   this.count33;
      
        }

  CheckStatus() {
    var df2  = "aa";
  // var df2 =  localStorage.getItem('user')
 
    
 df2 =  localStorage.getItem('user')

 if(df2 !=null) {
  console.log(df2)
  console.log("is not null")
   return true;
 }
 
 else {
  console.log(df2)
  console.log("is null")
    return false;

  
  
 }


  


  }

  GetEmail(pp:string ) {
    var data = {
      property1: pp
     
  };
 return this.http.get('http://88.150.164.30/NewTrademark/api/account/getEmails', { params: data }).toPromise()
 
   .then(data => {  return data; });

  }


  GetAgentRole(pp:string ,pp2 :string) {
    var data = {
      property1: pp,
      property2: pp2
  };
 return this.http.get('http://88.150.164.30/NewTrademark/api/account/getAgentRole2', { params: data }).toPromise()
 
   .then(data => {  return data; });

  }
  

 Login(formData: any) {
     
     
        return this.http.post('http://88.150.164.30/NewTrademark/api/account/GetLoginToken2', formData)
                    .toPromise()
                  
                    .then(data => {  return data; });

    }

















}