import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../services/demande.service';

@Component({
  templateUrl: './archive-demande.component.html',
  styleUrls: ['./archive-demande.component.css']
})
export class ArchiveDemandeComponent implements OnInit {
demandeListData:any;
  constructor(private demandeService:DemandeService) { }

  ngOnInit(): void {
		this.demandeService.getDemandeAll().subscribe( result =>{
          this.demandeListData = result
          console.log(this.demandeListData)
      })
    
	}

}
