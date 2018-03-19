import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TestPage } from '../test/test'

@Component({
    selector:'page-elemento',
    templateUrl:'elemento.html'
})
export class ElementoPage{
    //propiedades
    numeroPag:number;
    elementoPage=ElementoPage;
    testPage=TestPage;


    constructor(public navCtrl: NavController, public navParams:NavParams) {
        
        this.numeroPag=navParams.get('numero');
     }
   
    
}