import { Injectable } from '@angular/core';
import { UserModule } from './user/user.module';
import { IUser } from './interface/iuser';
import { IUserData } from './interface/iuser-data';
import { IUserDataPool } from './interface/iuser-data-pool';

@Injectable()
export class DataService {

  constructor(private user:UserModule) {
   }

   authenticateUser(username:string, pwd:string):boolean{
      for(let i=0; i < this.user.users.length; i++){
        if(this.user.users[i].Username.toLowerCase() == username.toLowerCase() && this.user.users[i].Password == pwd){
          this.user.setUserLogin(i);
          return true;
        }
      }
      return false;
   }

   isUserLoggedIn():boolean{
     return this.user.getUserLoggedIn();
   }

   updateUserIndex(username:string, oldVal:number, pointer:number){
     this.user.updateUserIndex(username, oldVal, pointer);
   }
      
   getUsers():IUser[]{
     return this.user.users;
   }

   getUserFullName():string{
    return this.user.getUserFullName();
   }
   
   getUserUsername():string{
     return this.user.getLoggedInUsername();
   }
   
   getUserData(username:string):IUserData[]{
      return this.user.getUserData(this.user.getUserDataIndexes(username));
   }
}
