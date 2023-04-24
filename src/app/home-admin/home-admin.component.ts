import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { Router, Routes } from '@angular/router';
import { AddEtudiantComponent } from '../add-etudiant/add-etudiant.component';

>>>>>>> 9d1384abb07c19381d6cd434348fe37d9bb265af
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
<<<<<<< HEAD

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addEtudiant(){
    this.router.navigate(["admin/add/etudiant"])
  }
  traiterDemandes(){
    this.router.navigate(["admin/demandes"])
  }
=======
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

  

>>>>>>> 9d1384abb07c19381d6cd434348fe37d9bb265af
}

export const homeAdminChildRoutes: Routes = [
	{
		path: 'add',
		component: AddEtudiantComponent
	},
	// {
	// 	path: 'add',
	// 	component: StudentAddComponent
	// },
	// {
	// 	path: 'update/:id',
	// 	component: StudentAddComponent
	// },
	// {
	// 	path: 'detail/:id',
	// 	component: StudentDetailsComponent
	// }
];
