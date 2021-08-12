import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    gradosCentigrados = true;
    temperaturaC;
    temperaturaF;
    // mostrar = true;

    // frase: any = {
    //     mensaje: 'Un gran poder conlleva una gran repsonsabilidad',
    //     autor: 'Ben Parker'
    // };

    // personajes: string [] = ['Spiderman', 'Batman', 'Logan'];

    // transformar( form:NgForm ) {
    // }
    calTemperatura( temp: string, gradosC: boolean ): void {
        const temperatura = parseFloat(temp);
        if ( gradosC) {
            this.temperaturaC = ( temperatura * (9 / 5)) + 32;
            this.temperaturaC = this.temperaturaC.toFixed(2);
        }else{
             this.temperaturaF = ( temperatura - 32) * (5 / 9);
             this.temperaturaF = this.temperaturaF.toFixed(2);
        }
    }
}
