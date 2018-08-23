import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: 'body.view.html'
})

export class BodyComponent {
    m:boolean;
    l:string[];

    constructor(){
        this.m = true;
        this.l = ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis"];
    }
}