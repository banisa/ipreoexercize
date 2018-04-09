import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { UserModule } from './user/user.module';
import {FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { UserDataModule } from './userdata/userdata.module';
import { AuthGuard } from './auth.guard';
import { DataService } from './data.service';
import { AdminComponent } from './admin/admin/admin.component';
import { PermissionsPipe } from './admin/admin/keys.pipe';

const appRoutes = [
  {path: '', component:LoginComponent},
  {
    path: 'workspace', 
    canActivate: [AuthGuard],
    component:WorkspaceComponent
  },
  {
    path: 'admin/admin', 
    canActivate: [AuthGuard],
    component:AdminComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    WorkspaceComponent,
    AdminComponent,
    PermissionsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    RouterModule.forRoot(appRoutes),
    UserDataModule
  ],
  providers: [AuthGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
