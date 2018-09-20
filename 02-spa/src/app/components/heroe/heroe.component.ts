import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  private heroe:Heroe=null;

  constructor(
    private activatedRoute:ActivatedRoute,
    private _heroeService:HeroesService
  ) { 
    this.activatedRoute.params.subscribe( params => {
        //console.log(params);
        //console.log(params['id']);
        this.heroe = _heroeService.getHeroe(params['id']);
        //console.log(this.heroe);
      }
    );
  }

  ngOnInit() {
  }

}
