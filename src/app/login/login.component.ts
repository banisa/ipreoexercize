import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errMsg: string;

  constructor(private router:Router, private dataService:DataService) { }

  ngOnInit() {
    this.errMsg = "";
  }

  loginUser(form: any){
    var user:string = form.value.username;
    var pwd = form.value.pwd;

    if(user == ''){
        this.errMsg = 'Please specify username';
        return true;
    }

    if(pwd == ''){
      this.errMsg = 'Please specify password';
      return true;
      }      

      if(this.dataService.authenticateUser(user, pwd)){
        if(user.toLowerCase() == 'admin'){
          this.router.navigate(['/admin/admin']);
        }
        else{
          this.router.navigate(['workspace']);
        }
     }
      else{
      this.errMsg = 'Invalid username and/or password';
      return true;
    }
  }

}
