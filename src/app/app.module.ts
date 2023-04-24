import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { HomeAdminComponent , homeAdminChildRoutes} from './home-admin/home-admin.component';
import { HomeEtudiantComponent } from './home-etudiant/home-etudiant.component';
import { DemandeAttestComponent } from './demande-attest/demande-attest.component';
import { AddRecComponent } from './add-rec/add-rec.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SetProfilComponent } from './set-profil/set-profil.component';
import { ProfilComponent } from './profil/profil.component';;
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { FilterPipe } from './filter.pipe';
import { DemandeDashComponent } from './demande-dash/demande-dash.component';
import { ArchiveDemandeComponent } from './archive-demande/archive-demande.component';
import { ReclamationDashComponent } from './reclamation-dash/reclamation-dash.component';
import { SuiviDemandeComponent } from './suivi-demande/suivi-demande.component'

const appRoutes: Routes =[
  {
    path:'admin', component: LoginAdminComponent,
    
  },
  {
    path:'',component:LoginEtudiantComponent
  },
  {
    path:'admin/dashboard',component:HomeAdminComponent,
    children:homeAdminChildRoutes
  },
  {
    path:'etudiant/demande/attest',component:DemandeAttestComponent
  },
  {
    path:'etudiant/home',component:HomeEtudiantComponent
  },
  {
    path:'etudiant/add/reclamation',component:AddRecComponent
  },{
    path:'etudiant/demandes',component:SuiviDemandeComponent
  },
  {
    path:'admin/add/etudiant',component:AddEtudiantComponent
  },
  {
    path:'etudiant/set/etudiant',component:SetProfilComponent
  },
  {
    path:'etudiant/profil',component:ProfilComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginEtudiantComponent,
    AddEtudiantComponent,
    LoginAdminComponent,
    HomeAdminComponent,
    HomeEtudiantComponent,
    DemandeAttestComponent,
    AddRecComponent,
    ListEtudiantComponent,
    FilterPipe,
    DemandeDashComponent,
    ArchiveDemandeComponent,
    ReclamationDashComponent,
    SetProfilComponent,
    ProfilComponent,
    SuiviDemandeComponent
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
