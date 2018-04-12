import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AlertController } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';


@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html'
})

export class TopicsPage {
  topicList: FirebaseListObservable<any[]>;
  newTopic = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider, public alertCtrl: AlertController, private fbApp: FirebaseApp) {
    this.topicList = this.firebaseProvider.getTopics();
  }

  addTopic() {
    // changing how we check if something already exists in the list
    // apparently this still doesn't count the voting correctly?

     var topicsRef = this.fbApp.database().ref('/topics/');

        topicsRef.child(this.newTopic).once('value', (snapshot) => {
          if (snapshot.exists()) {
            this.presentAlert();
          }
          else {
            this.firebaseProvider.addTopic(this.newTopic);
          }
        });

      }

    // this.firebaseProvider.getTopics().subscribe(snapshots =>
    // {
    //   if (this.newTopic.length < 1) { return; }
    //   let topicNames = [];
    //   snapshots.forEach(snapshot => {
    //       topicNames.push(snapshot.name);
    //   });
    //   if (topicNames.indexOf(this.newTopic) <= -1)
    //   {
    //     this.firebaseProvider.addTopic(this.newTopic);
    //   }
    // });


  removeTopic(id) {
    this.firebaseProvider.removeTopic(id);
  }

  updateVote(topic) {
    if (topic.checked)
    {
      console.log("Add a vote for " + topic.name);
    }
    else
    {
      console.log("Remove a vote for " + topic.name);
    }
  }


  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'This item is already in the list!',
    buttons: ['Dismiss']
  });
  alert.present();
}
}
