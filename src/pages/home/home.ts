// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {

//   constructor(public navCtrl: NavController) {

//   }

//   items = [
//     'EECS 348',
//     'EECS 394',
//     'EECS 330',
//     'EECS 101'
//   ];

//   itemSelected(item: string) {
//     console.log("Selected Item", item);
//   }

// }


import { Component } from '@angular/core';

import {
  FormGroup,
  FormControl

} from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  courses;
  courseForm;

  constructor() {
    this.courseForm = new FormGroup({
      "courses": new FormControl({value: 'EECS 336', disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.courseForm.value);
    event.preventDefault();
  }
}