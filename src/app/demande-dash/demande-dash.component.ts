import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-demande-dash',
  templateUrl: './demande-dash.component.html',
  styleUrls: ['./demande-dash.component.css']
})
export class DemandeDashComponent implements OnInit {
demandeListData:any;
  constructor(private demandeService:DemandeService) { }

  ngOnInit(): void {
		this.demandeService.getDemandeEnCours().subscribe( result =>{
          this.demandeListData = result
          console.log(this.demandeListData)
      })
    
	}

  accepterDemande(id:any,etudiant:any){
    
    this.demandeService.genererAttestation(etudiant).subscribe(result=>{
      console.log("Attestion générée")
    }
    )
    console.log("Accepting demande num: "+id)
    this.demandeService.accepterDemande(id).subscribe(result=>
      {console.log(result);
      window.location.reload();}
      )
  }

  refuserDemande(id:any){
    let raison = prompt("Veuillez saisir la raison du refus");
    if(raison){
      this.demandeService.refuserDemande(id,raison).subscribe(result=>
        {console.log(result);
        window.location.reload();}
        )
      }
  }


}
