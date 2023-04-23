import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginEtudiantComponent,
    AddEtudiantComponent,
    LoginAdminComponent,
    HomeAdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
