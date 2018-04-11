import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  items = [
    'EECS 348',
    'EECS 394',
    'EECS 330',
    'EECS 101'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
