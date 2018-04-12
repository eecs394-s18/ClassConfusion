import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { CourseProvider } from './../../providers/course/course';
import { Observable } from '@firebase/util';

@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html'
})

export class TopicsPage {
  topicList: FirebaseListObservable<any[]>;
  newTopic = '';
  currentTopic = '';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider, public courseService: CourseProvider) {
    this.topicList = this.firebaseProvider.getTopics();
    // get all topics from firebase for testing purposes:
    // this.firebaseProvider.getTopics().subscribe(snapshots =>
    // {
    //   snapshots.forEach(snapshot => {
    //       // console.log(snapshot);
    //   });
    // });

    this.currentTopic = courseService.currentCourse;
  }

  addTopic() {
    this.firebaseProvider.getTopics().subscribe(snapshots =>
    {
      if (this.newTopic.length < 1) { return; }
      let topicNames = [];
      snapshots.forEach(snapshot => {
          topicNames.push(snapshot.name);
      });
      if (topicNames.indexOf(this.newTopic) <= -1)
      {
        this.firebaseProvider.addTopic(this.newTopic);
      }
    });
  }
 
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
}
