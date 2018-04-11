import { Component } from '@angular/core';

/**
 * Generated class for the ClassListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'class-list',
  templateUrl: 'class-list.html'
})
export class ClassListComponent {

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
