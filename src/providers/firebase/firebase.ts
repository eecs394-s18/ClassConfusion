import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
  }

  getItems() {
      return this.afd.list('/topics/'); 
  }

  addItem(name) {
      this.afd.list('/topics/').push(name);
  }

  removeItem(id) {
      this.afd.list('/topics/').remove(id);
  }

}
