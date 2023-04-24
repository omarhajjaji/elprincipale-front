import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AddEtudiantComponent } from '../add-etudiant/add-etudiant.component';
import { ListEtudiantComponent } from '../list-etudiant/list-etudiant.component';
import { DemandeDashComponent } from '../demande-dash/demande-dash.component';
import { ArchiveDemandeComponent } from '../archive-demande/archive-demande.component';
import { ReclamationDashComponent } from '../reclamation-dash/reclamation-dash.component';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
active: string;
  constructor(private router: Router) {
		this.active = '';
		// Detect route changes for active sidebar menu
		this.router.events.subscribe((val) => {
			this.routeChanged(val);
		});
	}

  ngOnInit(): void {
  }
  // Detect route changes for active sidebar menu
	routeChanged(val: any) {
		this.active = val.url;
	}

	// Logout User
	logOut() {
		localStorage.removeItem('token');
		this.router.navigate(['/admin']);
	}

  

}

export const homeAdminChildRoutes: Routes = [
	{
		path: 'add',
		component: AddEtudiantComponent
	},
	{
		path: '',
		component: ListEtudiantComponent
	},
	{
		path: 'demande',
		component: DemandeDashComponent
	},
	{
		path: 'archive',
		component: ArchiveDemandeComponent
	},
	{
		path: 'reclamation',
		component: ReclamationDashComponent
	}
];
