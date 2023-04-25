import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReclamationService } from '../services/reclamation.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-rec',
  templateUrl: './add-rec.component.html',
  styleUrls: ['./add-rec.component.css']
})
export class AddRecComponent implements OnInit {
  formGroup!:FormGroup
  constructor(private reclamationServ:ReclamationService,private appComp:AppComponent,private router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }
  addReclamation(){
    if(this.formGroup.valid){
      let form = this.formGroup.value
      form.etudiant=this.appComp.userData
      form.etudiant.dateNaiss=""
      this.reclamationServ.addReclamation(form).subscribe(result=>{
          this.router.navigate(['/etudiant/home'])
      })
    }
  }
  initForm(){
    this.formGroup = new FormGroup({
      description : new FormControl('',[Validators.required]),
    })
  }
}
