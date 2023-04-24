import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';
import { AppComponent } from '../app.component';

@Component({
  templateUrl: './suivi-demande.component.html',
  styleUrls: ['./suivi-demande.component.css']
})
export class SuiviDemandeComponent implements OnInit {
demandeListData:any;
  constructor(private demandeService:DemandeService,private appComp:AppComponent) { }

  ngOnInit(): void {
    this.demandeService.getDemandeByEtudiant(this.appComp.userData.cin).subscribe( result =>{
          this.demandeListData = result
          console.log(this.demandeListData)
      })
  }

}
