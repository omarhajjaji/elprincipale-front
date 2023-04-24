import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { AccountService } from '../services/account.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
etudiant:any;
  constructor(private etudService:EtudiantService,private appComp:AppComponent) {
        this.etudService.getEtudiantByCin(this.appComp.userData.cin).subscribe(reponse=>{
        this.etudiant = reponse
    })
   }

  ngOnInit(): void {

  }

}
