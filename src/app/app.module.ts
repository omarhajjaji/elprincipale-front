import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeEtudiantComponent } from './home-etudiant/home-etudiant.component';
import { DemandeAttestComponent } from './demande-attest/demande-attest.component';
import { AddRecComponent } from './add-rec/add-rec.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginEtudiantComponent,
    AddEtudiantComponent,
    LoginAdminComponent,
    HomeAdminComponent,
    HomeEtudiantComponent,
    DemandeAttestComponent,
    AddRecComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
