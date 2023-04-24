import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from '../services/etudiant.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
  formGroup!:FormGroup
  constructor(private etudService:EtudiantService,private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  addEtudiant(){
    if(this.formGroup.valid){
      this.etudService.createEtudiant(this.formGroup.value).subscribe( result =>{
          console.log(result)
          this.router.navigate(["/admin/dashboard"])
      })
    }
  }
  initForm(){
    this.formGroup = new FormGroup({
      email : new FormControl('',[Validators.required]),
      cin : new FormControl('',[Validators.required]),
      nom : new FormControl('',[Validators.required]),
      prenom : new FormControl('',[Validators.required]),
      numTel : new FormControl('',[Validators.required]),
      dateNaiss : new FormControl('',[Validators.required]),
      numInsc : new FormControl('',[Validators.required]),
      niveau : new FormControl('',[Validators.required]),
      groupe : new FormControl('',[Validators.required]),
      specialite : new FormControl('',[Validators.required]),
      parcours : new FormControl('',[Validators.required]),
    })
  }

}
