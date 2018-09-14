import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html',
  styles: []
})
export class SearchHeroesComponent implements OnInit {

  private heroes:Heroe[] = [];
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private _heroeService:HeroesService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      //console.log(params['text']);
      this.heroes = this._heroeService.searchHeroes(params['text']);
    });
  }
}
