import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from '../services/etudiant.service';
import { Router } from '@angular/router';
import { FileUploadService } from '../services/file-upload.service';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {



  formGroup!:FormGroup

    // Variable to store shortLink from api response
    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file!: File; // Variable to store file
  constructor(private etudService:EtudiantService,private router: Router
    ,private fileUploadService: FileUploadService) { }

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

  onChange(event:any) {
        this.file = event.target.files[0];
    }
  
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        this.fileUploadService.upload(this.file).subscribe(
            (event: any) => {
                  console.log("Upload successful")
                    // Short link via api response
                    this.shortLink = event.link;
                    this.loading = false; // Flag variable 
                
            }
        );
    }

}
