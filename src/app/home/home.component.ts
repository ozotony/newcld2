
import { Component, OnInit , ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../ApiService';

import swal from 'sweetalert2';

interface IModal {
  username: string;
  password: string;




}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  islogin: boolean = false;
  userform: FormGroup;
  formData = new FormData();
  busy: Promise<any>;
  Emails:Array<any>=[];
  public customClass: string = 'customClass';
  public customClass2: string = 'customClass';
  modal: IModal = { 'username': "", 'password': "" };
  @ViewChild('group') group;
  constructor(private fb: FormBuilder, private registerapi: ApiService) {

    this.registerapi.VChangeEvent(15);
   }

  dap(dd) {
    console.log(dd )
  }

  getStatus(dp) {
    if (dp.Status) {
      
                             return false
                         }
                         else {
      
                             return true;
                         }
  }

  getcustomClass(pp) {
    if (pp) {

      return "customClass"
    }

    else {
      return "customClass2"
    }
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


  Save() {
    this.formData = new FormData();;
    this.modal.username = this.userform.value.username;
    this.modal.password = this.userform.value.password;



    var AgentsData2 = {

      "username": this.userform.value.username,
      "password": this.userform.value.password


    };


    this.busy = this.registerapi
      .Login(AgentsData2)
      .then((response: any) => {

        var ppr = response.json()

        if (ppr == null) {
          swal('', 'Invalid UserName / Password', 'error');

          return;

        }
      //  console.log(ppr)

       


        this.busy = this.registerapi.GetAgentRole(ppr.Sys_ID, ppr.xid).then((response: any) => {

         // console.log(response.json())
          localStorage.setItem("agentRole",JSON.stringify( response.json()));

          this.busy = this.registerapi.GetEmail(ppr.Sys_ID).then((response: any) => {

           // console.log(response.json())
           localStorage.setItem("loginuser", ppr.Email);
           
                   localStorage.setItem("user", JSON.stringify(ppr));
           
                   localStorage.setItem("access2", ppr.Token);
            localStorage.setItem("Email",JSON.stringify( response.json()));
            this.Emails= response.json();
            // swal('', 'Success!', 'success')   
          })

          // swal('', 'Success!', 'success')   
        })

          .catch(() => {
            swal('Oops...', 'Something went wrong 2!', 'error')
            //  alert("error")
            // Animation interrupted
          });
        //swal('Oops...', 'Something went wrong!', 'success')   
        //    alert("success")
      })
      .catch(() => {
        swal('Oops...', 'Something went wrong!', 'error')
        //  alert("error")
        // Animation interrupted
      });

  }

  ngOnInit() {

   // this.registerapi.VChangeEvent(16);

    //console.log( this.registerapi.GetCount2())
    
   // this.registerapi.SetCount(0);
    var df2 =  localStorage.getItem('user')
    
  //var kk =  localStorage.getItem("Email");

 
     if ( df2 ==undefined || df2 =="" ) {
          
   }
 
   else {
    // console.log("true")
    var kk2 =  localStorage.getItem('Email');
    console.log(kk2)
    this.Emails= JSON.parse(kk2);
   //this.Emails=kk2 



   
    
   }

    this.userform = this.fb.group({
      'username': new FormControl('', Validators.required),

      'password': new FormControl('', Validators.required),



    })
  }

}
