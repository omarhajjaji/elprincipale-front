import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddRecComponent } from '../add-rec/add-rec.component';
@Component({
  selector: 'app-home-etudiant',
  templateUrl: './home-etudiant.component.html',
  styleUrls: ['./home-etudiant.component.css']
})
export class HomeEtudiantComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
