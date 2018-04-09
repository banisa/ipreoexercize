import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IUserData } from '../interface/iuser-data';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  clientFullName: string;
  clientUsername: string;
  userData:IUserData[];
  
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.clientFullName = this.dataService.getUserFullName();
    this.clientUsername = this.dataService.getUserUsername();
    this.userData = this.dataService.getUserData(this.clientUsername);
  }
}
