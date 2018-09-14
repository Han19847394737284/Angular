import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    //template: `<p>I am Component Header</p>`
    templateUrl: 'header.view.html'
})

export class HeaderComponent implements OnInit{

    constructor(
        private router:Router
    ) {}

    ngOnInit(){}

    searchHeroe(textSearch){
        this.router.navigate(['/searcheroe', textSearch]);
    }
}