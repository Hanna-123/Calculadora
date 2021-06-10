import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    
    mostrar = true;

    frase: any = {
        mensaje: 'Un gran poder conlleva una gran repsonsabilidad',
        autor: 'Ben Parker'
    };

    personajes: string [] = ['Spiderman', 'Batman', 'Logan']; 

}