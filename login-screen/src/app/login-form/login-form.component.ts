import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.styl']
})
export class LoginFormComponent implements OnInit {
  // @ViewChild('username') userName:any;
private userDetail:Array<{name: string,pass: string}> = [{name:'Ana',pass:'p'},{name:'Sharad',pass:'p'},{name:'Vasant',pass:'p'}];
private userName:any;
private password:any;
public welcomeText:any;
public participantName:any;
private loggedin: boolean =false;
  constructor() {
    
    }

  
  ngOnInit() {
  }

  getLoginUser($event){
    console.log($event);
    this.userName =$event.target.value;
  }

  getLoginPwd($event){
    console.log($event);
    this.password =$event.target.value;
  }

  loginUser(e) {
    // e.preventDefault(); 
    // console.log(e);
    
    // console.log(this.userName, this.password);
    for(let data of this.userDetail)
   {
     if(data.name == this.userName && data.pass == this.password){
      this.welcomeText = "Welcome";
      this.participantName = data.name;
      this.loggedin = true;
      break;
    }
    else{
      this.welcomeText = "Please try again"; 
      this.loggedin = false; 
    }
   }

    
  }

  
}
