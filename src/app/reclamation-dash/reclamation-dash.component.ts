import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../services/reclamation.service';

@Component({
  templateUrl: './reclamation-dash.component.html',
  styleUrls: ['./reclamation-dash.component.css']
})
export class ReclamationDashComponent implements OnInit {
reclamationListData:any;
  constructor(private reclamationService:ReclamationService) { }

  ngOnInit(): void {
    this.reclamationService.getAllReclamation().subscribe( result =>{
          this.reclamationListData = result
          console.log(this.reclamationListData)
      })
  }

  traiterReclam(id:any){
    console.log("Accepting reclamation num: "+id)
    this.reclamationService.accepterReclamation(id).subscribe(result=>
      {console.log(result);
      window.location.reload();}
      )
  }
  refuserReclam(id:any){
        console.log("Refusing reclamation num: "+id)
      this.reclamationService.refuserReclamation(id).subscribe(result=>
      {console.log(result);
      window.location.reload();}
      )
  }


}
