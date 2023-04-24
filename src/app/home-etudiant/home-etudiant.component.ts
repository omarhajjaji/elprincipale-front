import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-etudiant',
  templateUrl: './home-etudiant.component.html',
  styleUrls: ['./home-etudiant.component.css']
})
export class HomeEtudiantComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  doAjoutDemande(){
    
    this.router.navigate(["etudiant/demande/attest"])
  }
  doAjoutRec(){
    
    this.router.navigate(["etudiant/add/reclamation"])
  }

}
