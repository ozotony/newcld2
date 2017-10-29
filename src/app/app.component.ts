import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from './ApiService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
islogin:boolean =false;
subscription: any;
  constructor(private router: Router, private registerapi: ApiService) {
    this.subscription = this.registerapi.getNavChangeEmitter()
    .subscribe(item => this.selectedNavItem(item));
  }

  selectedNavItem(item: string) {
    this.registerapi.SetCount2(item);

  }

  

  Getval(dp) {
    var kk = this.registerapi.GetCount();
return kk==dp;

  }

  Getval2(dp) {
    var kk = this.registerapi.GetCount2();
return kk==dp;

  }
  setval2(dd) {
    this.registerapi.SetCount2(dd);
    this.registerapi.SetCount(0);
  }

  setval(dd) {
    this.registerapi.SetCount(dd);
    if (dd=="10" ||dd=="11" ||dd=="12" ) {
      this.registerapi.SetCount2("10");
    }

    if (dd=="13" ||dd=="14" ||dd=="15" ) {
      this.registerapi.SetCount2("11");
    }

    if (dd=="16" ||dd=="17" ||dd=="18" ) {
      this.registerapi.SetCount2("12");
    }

    if (dd=="19" ||dd=="20" ||dd=="21" ) {
      this.registerapi.SetCount2("13");
    }


  }
  
  logout() {
    
    localStorage.setItem("loginuser","");
    
            localStorage.setItem("user","");
    
            localStorage.setItem("access2","");
            localStorage.setItem("agentRole","");
            localStorage.setItem("Email","");
  }

  GetStatus() {
    var df2 =  localStorage.getItem('user')
   
  

    if ( df2 ==undefined || df2 =="" ) {
     
    return false;
    
  }

  else {
   
    return true;
  }

}

ngOnInit() {
//  this.registerapi.SetCount2(15);

}
}
