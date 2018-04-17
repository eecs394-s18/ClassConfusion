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
  topicsRef: any;
  // currentCourse = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider, public alertCtrl: AlertController, private fbApp: FirebaseApp) {
    this.topicList = this.firebaseProvider.getTopics();
    this.topicsRef =  this.fbApp.database().ref('/topics/');
    // this.currentCourse = courseService.currentCourse;
  }

  addTopic() {
    this.topicsRef.child(this.newTopic).once('value', (snapshot) => {
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

  updateVote(topic) {
    var newCount = topic.voteCount;
    console.log(topic.voteCount);
    if (topic.color == "#65f442") // green
    {
      topic.color= "#f44242";
      newCount --;
    }
    else
    {
      topic.color = "#65f442";
      newCount ++;
    }

    this.firebaseProvider.changeVote(topic.name, newCount);

    // var topicRef = this.topicsRef.child(topic.name);
    // topicRef.transaction(function(currentTopic) {
    //   currentTopic.voteCount += voteChange;
    //   return currentTopic;
    // });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'This item is already in the list!',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
