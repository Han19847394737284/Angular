import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private heroes:Heroe[] = null;

  constructor(
    private heroesService:HeroesService,
    private router:Router
  ) { 
    console.log("The Constructor is Ready");
  }

  ngOnInit() {
    console.log("The ngOnInit is Ready");
    console.log(this.heroesService.getHeroes());
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(idx:number) {
    this.router.navigate(['/heroe', idx]);
  }
}
