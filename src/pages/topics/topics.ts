import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html'
})

export class TopicsPage {
  topicList: FirebaseListObservable<any[]>;
  newTopic = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.topicList = this.firebaseProvider.getItems();
  }

  addTopic() {
    this.firebaseProvider.addItem(this.newTopic);
  }
 
  removeTopic(id) {
    this.firebaseProvider.removeItem(id);
  }

}
