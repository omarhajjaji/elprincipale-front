import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'elprincipale-front';
  userData:any;
  constructor(private accService:AccountService){
  }
    ngOnInit() {
      if(localStorage.getItem("etudiant")){
      this.userData = JSON.parse(localStorage.getItem("etudiant")||"")
      console.log(this.userData)
      }
  }

  logOut(){
    this.accService.logOut()
  }
}
