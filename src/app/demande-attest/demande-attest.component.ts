import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DemandeService } from '../services/demande.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande-attest',
  templateUrl: './demande-attest.component.html',
  styleUrls: ['./demande-attest.component.css']
})
export class DemandeAttestComponent implements OnInit {
  formGroup!:FormGroup
  constructor(private demandeSev:DemandeService,private appComp:AppComponent,private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }
  addDemande(){
    if(this.formGroup.valid){
      let form = this.formGroup.value
      form.typeD="ATTEST_PRESENCE"
      form.etudiant=this.appComp.userData
      this.demandeSev.addDemande(form).subscribe(result=>{
          this.router.navigate(['/etudiant/home'])
      })
    }
  }
  initForm(){
    this.formGroup = new FormGroup({
      raison : new FormControl('',[Validators.required]),
    })
  }
}
