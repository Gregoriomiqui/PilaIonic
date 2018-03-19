import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
    selector:'page-elemento',
    templateUrl:'elemento.html'
})
export class ElementoPage{
    numeroPag:number;

    constructor(public navCtrl: NavController, public navParams:NavParams) {
        
        this.numeroPag=navParams.get('numero');
     }
    volver(){ 
        //volvemos a la anterior pagina
        this.navCtrl.pop();
    }

    agregarPagina(){
        this.navCtrl.push(ElementoPage, { numero: this.numeroPag + 1 } );
      }

    
}