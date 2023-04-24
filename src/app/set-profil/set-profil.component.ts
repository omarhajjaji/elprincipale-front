import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-set-profil',
  templateUrl: './set-profil.component.html',
  styleUrls: ['./set-profil.component.css']
})
export class SetProfilComponent implements OnInit {
  formGroup!:FormGroup
  constructor() { }

  ngOnInit(): void {
  }
  setEtudiant(){
    if(this.formGroup.valid){
    
    }
  }
}
