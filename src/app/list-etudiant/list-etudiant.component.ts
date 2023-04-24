import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
etudiantList: any;
	etudiantListData: any;
	filterData: string = '';
	constructor(private etudiantService: EtudiantService) { }
	// Call student list function on page load 
	ngOnInit() {
		this.etudiantList = this.etudiantService.getAllEtudiants().subscribe( result =>{
          this.etudiantListData = result
      })
    
	}

	// Get student list from services
	deleteEtudiant(cin:any) {
		 console.log("Deleting etudiant num: "+cin)
      this.etudiantService.deleteEtudiant(cin).subscribe(result=>
      	{console.log(result);
      		window.location.reload();
		},error => {
			window.location.reload();
		}
		
      )
	}
	

}
