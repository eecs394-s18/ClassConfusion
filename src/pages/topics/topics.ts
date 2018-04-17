import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';
// import { ResultsPage } from '../results/results';
// import { CourseProvider } from './../../providers/course/course';

@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html'
})

export class TopicsPage {
  topicList: Array<any> = [];
  newTopic = '';
  topicsRef: any; // Reference that is frequenly used
  ready: boolean = false; // Check if topics are retrieved before loading list of checkboxes

  checkedMap: Map<string, boolean>; 

  // currentCourse = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider, public alertCtrl: AlertController, private fbApp: FirebaseApp) {
    this.topicsRef =  this.fbApp.database().ref('/topics/');
    this.getTopics(); // load up the topicList
    this.checkedMap = new Map([]);
    // this.currentCourse = courseService.currentCourse;
  }

  getTopics() {
    this.ready = false;
    this.topicList = []; // wipe to prevent duplicates from appearing
    this.topicsRef.on('value', (snapshot) => {
      snapshot.forEach((child) => {
        this.topicList.push(child.val());
      });
    });
    console.log("[Alert] Retrieved topics from Firebase.");
    this.ready = true; // Now ready to display...
  }

  addTopic() {
    this.topicsRef.child(this.newTopic).once('value', (snapshot) => {
      if (snapshot.exists()) {
        this.presentAlert();
      }
      else {
        this.ready = false;
        this.firebaseProvider.addTopic(this.newTopic);
        this.newTopic = ""; // empty out the new topic field
        this.getTopics();
      }
    });

  }

  updateVote(topicName) {
    this.setStatus(topicName);
    var voteChange = 0;
    if (this.checkedMap.get(topicName)) { voteChange = 1; }
    else { voteChange = -1; }
    
    var topicRef = this.topicsRef.child(topicName);
    topicRef.transaction(function(currentTopic) {
      currentTopic.voteCount += voteChange;
      return currentTopic;
    });

    this.getTopics();
  }

  removeTopic(name) {
    this.ready = false;
    this.firebaseProvider.removeTopic(name);
    this.checkedMap.delete(name);
    this.getTopics();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'This item is already in the list!',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  setStatus(name) {
    var currentStatus = this.checkedMap.get(name);
    console.log("Currently: " + currentStatus + "; should become: " + !currentStatus); 
    if (currentStatus) // If not first time, just flip the status
    {
      this.checkedMap.set(name, !currentStatus);
    }
    else // First time
    {
      this.checkedMap.set(name, true);
    }
    console.log(this.checkedMap);
  }
}
