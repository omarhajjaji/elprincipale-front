import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-rec',
  templateUrl: './add-rec.component.html',
  styleUrls: ['./add-rec.component.css']
})
export class AddRecComponent implements OnInit {
  formGroup!:FormGroup
  constructor() { }

  ngOnInit(): void {
  }
  addReclamation(){
    if(this.formGroup.valid){
    
    }
  }
}
