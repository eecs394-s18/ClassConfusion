import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AlertController } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';
// import { ResultsPage } from '../results/results';
// import { CourseProvider } from './../../providers/course/course';


@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html'
})

export class TopicsPage {
  topicList: FirebaseListObservable<any[]>;
  newTopic = '';
  // currentCourse = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider, public alertCtrl: AlertController, private fbApp: FirebaseApp) {
    this.topicList = this.firebaseProvider.getTopics();

    // this.currentCourse = courseService.currentCourse;
  }

  addTopic() {
    var topicsRef = this.fbApp.database().ref('/topics/');

    topicsRef.child(this.newTopic).once('value', (snapshot) => {
      if (snapshot.exists()) {
        this.presentAlert();
      }
      else {
        this.firebaseProvider.addTopic(this.newTopic);
        this.newTopic = ""; // empty out the new topic field
      }
    });
  }

  removeTopic(id) {
    this.firebaseProvider.removeTopic(id);
  }

  update(topic) {
    console.log("update!");
  }

  updateVote(topic, isChecked) {
    console.log("Name: " + topic.name);
    console.log("Checked? " + topic.checked);
    var voteRef = this.fbApp.database().ref('/topics/' + topic.name + '/voteCount');
    voteRef.transaction((currentCount) => {
      if (topic.checked)
      {
        return currentCount + 1;
      }
      return currentCount - 1;
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'This item is already in the list!',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
