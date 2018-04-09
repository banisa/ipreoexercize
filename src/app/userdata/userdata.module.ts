import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUserData } from '../interface/iuser-data';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UserDataModule {
    userdata:IUserData[];

    constructor(){
      this.userdata = [
        {
          Id: 1,
          Index : 'SPDR S&P 500 ETF',
          Ticker : 'SPY',
          Price : 272.12
        },
        {
          Id: 2,
          Index : 'SPRD Dow Jones Industrial Avarage ETF',
          Ticker : 'DIA',
          Price : 250.80
        },
        {
          Id: 3,
          Index : 'S&P 500 High Dividend Index',
          Ticker : 'SPYD',
          Price : 36.58
        },
        {
          Id: 4,
          Index : 'Vanguard Total Stock Market ETF',
          Ticker : 'VTI',
          Price : 139.34
        }
      ]
    }    
 }


