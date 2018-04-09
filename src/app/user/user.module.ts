import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataModule } from '../userdata/userdata.module';
import { IUser } from '../interface/iuser';
import { IUserData } from '../interface/iuser-data';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UserModule { 
   isLoggedIn: boolean;
   loggedInId: number;
   users:IUser[];

  constructor(private userData:UserDataModule){
    this.isLoggedIn = false;
    this.loggedInId = 0;
    this.users = [
      {
        UserId: 1,
        FullName: 'Client A',
        Username: 'ClientA',
        Password: 'clienta',
        Indexes:[1,0,0,0]
      },
      {
        UserId: 2,
        FullName: 'Client B',
        Username: 'ClientB',
        Password: 'clientb',
        Indexes:[0,0,0,4]
      },
      {
        UserId: 3,
        FullName: 'Administrator',
        Username: 'Admin',
        Password: 'admin',
        Indexes:[1,2,3,4]
      },
    ]
  }

  setUserLogin(userId:number){
    this.loggedInId = userId;
    this.isLoggedIn = true;    
  }

  getUserLoggedIn():boolean{
    return this.isLoggedIn;
  }

  getUserLoggedInId():number{
    return this.loggedInId;
  }
  
  getUserFullName():string{
    if(this.isLoggedIn){
     return this.users[this.loggedInId].FullName;
    }
  }

  getLoggedInUsername(): string{
    if(this.isLoggedIn){
      return this.users[this.loggedInId].Username;
     }
  }

  getUserDataIndexes(username:string):number[]{
    if(this.isLoggedIn){
      for(let i = 0; i < this.users.length; i++){
        if(this.users[i].Username == username){
          return this.users[i].Indexes;
        }
      }
    }
  }
 
  getUserData(index:number[]):IUserData[]{
    let data:IUserData[]=[];

    //loop thru supplied indexes/id from UI
    for(let arg = 0; arg<=index.length; arg++){
      //check if the supplied id matches our records
      for(let i=0; i<this.userData.userdata.length;i++){
        if(this.userData.userdata[i].Id == index[arg]){
          //push to the instance of the array     
          let usrDat: IUserData = 
              {
                Id: this.userData.userdata[i].Id,
                Index: this.userData.userdata[i].Index,
                Ticker: this.userData.userdata[i].Ticker,
                Price: this.userData.userdata[i].Price
              };          
         data.push(usrDat);
        }
      }
    }
    return data;
  }

  updateUserIndex(username:string, oldVal:number, pointer:number){
    this.users.forEach(user =>{
      if(user.Username == username){        
        if(oldVal == 0){
          let newVal:number = pointer+1;   
          user.Indexes[pointer] = newVal;
        }
        else{         
          user.Indexes[pointer] = 0;
        }
      }
    })
  }
}
