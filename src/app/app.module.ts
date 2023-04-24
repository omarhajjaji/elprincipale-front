import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
<<<<<<< HEAD
import { HomeEtudiantComponent } from './home-etudiant/home-etudiant.component';
import { DemandeAttestComponent } from './demande-attest/demande-attest.component';
import { AddRecComponent } from './add-rec/add-rec.component';

=======
import {RouterModule, Routes} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

const appRoutes: Routes =[
  {
    path:'admin', component: LoginAdminComponent
  },
  {
    path:'',component:LoginEtudiantComponent
  },
  {
    path:'admin/dashboard',component:HomeAdminComponent
  }
]
>>>>>>> 5fdc4d28fa477496ba1364a707e859e9daf46734

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
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
