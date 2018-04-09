import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { IUserData } from '../../interface/iuser-data';
import { IUser } from '../../interface/iuser';
import { IUserDataPool } from '../../interface/iuser-data-pool';
import { IUnsavedChanges } from '../../interface/iunsaved-changes';
import { PermissionsPipe } from '../admin/keys.pipe';
 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  clientFullName: string;
  clientUsername: string;
  unsorteduserData:IUserData[];
  userData:IUserData[];
  users:IUser[];
  unsavedChanges:IUnsavedChanges[]; 
  
  constructor(private dataService:DataService) { }

  ngOnInit() {
    //DISPLAY LOGGED IN ADMIN/USER
    this.clientFullName = this.dataService.getUserFullName();
    this.clientUsername = this.dataService.getUserUsername();
    //GET DISPLAY DETAILS
    this.loadUserData();
    //INITIALISE UNSAVED CHANGES LIST
    this.unsavedChanges = [];
  }
  
  loadUserData(){
     //GET AND SORT USER DATA
     this.unsorteduserData = this.dataService.getUserData(this.clientUsername).slice(0);
     this.userData = this.unsorteduserData.sort((leftSide, rightSide):number =>{
       if(leftSide.Id < rightSide.Id) return -1;
       if(leftSide.Id > rightSide.Id) return 1;
       return 0;
     });
     //GET ALL USERS
     this.users = this.dataService.getUsers();
  }

  updatePermissions(){
    this.unsavedChanges.forEach(changes =>{
      console.log('Updating: '+ changes.Username + ' ' + changes.Index + ' ' + changes.Pointer);
      this.dataService.updateUserIndex(changes.Username, changes.Index, changes.Pointer)   
    });

    //WHEN DONE - RESET
    this.unsavedChanges = [];
    
    //RELOAD USERS AND DATA
    this.loadUserData();
    return true;
  }

  getFormChanges(frmUser:IUser, frmUserIndex:number, pointer:number){
      let changes:IUnsavedChanges = {
      Username: frmUser.Username,
      Index: frmUserIndex,
      Pointer: pointer
    }
    this.unsavedChanges.push(changes);
  }
}
