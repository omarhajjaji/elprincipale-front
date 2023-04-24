import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private accService:AccountService,private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  doLogin(){
    if(this.formGroup.valid){
      this.accService.onLogin(this.formGroup.value).subscribe( result =>{
          // console.log(result)
          this.accService.storeTokenAdmin(result)
          this.router.navigate(["/admin/dashboard"])
          
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
