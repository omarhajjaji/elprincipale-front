import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demande-attest',
  templateUrl: './demande-attest.component.html',
  styleUrls: ['./demande-attest.component.css']
})
export class DemandeAttestComponent implements OnInit {
  formGroup!:FormGroup
  constructor() { }

  ngOnInit(): void {
  }
  addDemande(){
    if(this.formGroup.valid){
    
    }
  }
}
