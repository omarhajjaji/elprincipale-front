import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login-etudiant',
  templateUrl: './login-etudiant.component.html',
  styleUrls: ['./login-etudiant.component.css']
})
export class LoginEtudiantComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private accService:AccountService,private router: Router,private appComp:AppComponent) { }

  ngOnInit(): void {
    this.initForm();
  }
  doLogin(){
    if(this.formGroup.valid){
      this.accService.onLogin(this.formGroup.value).subscribe( result =>{
          // console.log(result)
          this.accService.storeToken(result)
          this.appComp.ngOnInit();
          this.router.navigate(["/etudiant/home"])
      })
    }
  }
  initForm(){
    this.formGroup = new FormGroup({
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
    })
  }

}
