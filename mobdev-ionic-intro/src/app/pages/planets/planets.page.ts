import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { ApiService } from '../..//services/api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets: Observable<any>;
  constructor(private navController: NavController, private router: Router, private api: ApiService) { }


  ngOnInit() {
    this.planets = this.api.getPlanets();
   
  }
  openDetails(planets) {
    let split = planets.url.split('/');
    let planetsId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/planets/${planetsId}`);
    }
}
