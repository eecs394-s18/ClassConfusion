import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html'
})

export class TopicsPage {
  topicList: Array<any> = [];
  topicsRef: any; // Reference to all of the topics
  ready: boolean = false; // Check if topicList is ready to be rendered
  newTopic: string = '';

  checkedMap: Map<string, boolean>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private fbApp: FirebaseApp) {

    // // These variables should be ~provided~ from elsewhere
    // var courseName = ""; // Format here would be 'eecs330/'
    // var currentLecture = ""; // Format here would be 'lecture01'

    this.topicsRef =  this.fbApp.database().ref('/topics/');

    this.getTopics(); // load up the topicList
    this.checkedMap = new Map([]);
  }

  /**
    Topic features
  **/

  getTopics() {
    this.ready = false; // Stop showing the list on page
    this.topicList = []; // Wipe out the list of topics to be replaced
    this.topicsRef.on('value', (snapshot) => {
      snapshot.forEach((child) => {
        this.topicList.push(child.val()); // Add topics by name
      });
    });
    console.log("[Alert] Retrieved topics from Firebase.");
    this.ready = true; // List is now ready to display
  }

  addTopic() {
    if (this.newTopic.length === 0) { return; } // Fix for issue #5
    this.topicsRef.child(this.newTopic).once('value', (snapshot) => {
      if (snapshot.exists()) {
        this.presentAlert();
      }
      else {
        this.topicsRef.child(this.newTopic); // Create new child...
        this.topicsRef.child(this.newTopic).set(
        {
          name: this.newTopic,
          voteCount: 0,
        }); // Add our new topic data to the child
        this.newTopic = ""; // Empty out the new topic field
        this.getTopics(); // Reload the topicList
      }
    });

  }

  editTopic(name) {
    console.log("Edit topic " + name);
  }

  removeTopic(name) {
    var topicRef = this.topicsRef.child(name);
    if (topicRef)
    {
      this.topicsRef.child(name).remove(); // Remove child from the database
      this.checkedMap.delete(name); // Remove topic from our Map
    }
    this.getTopics(); // Reload the topicList
  }

  /**
    Voting features
  **/

  updateVote(topicName) {
    this.setStatus(topicName); // Use setStatus helper method to flip checked status in the Map
    // Logic to decide how much to change the vote count by
    var voteChange = 0;
    if (this.checkedMap.get(topicName)) { voteChange = 1; }
    else { voteChange = -1; }

    var topicRef = this.topicsRef.child(topicName);
    // Change voteCount using transaction; modify object then returning it (thus locking in the transaction)
    topicRef.transaction((selected) => {
      selected.voteCount += voteChange;
      return selected;
    });

    this.getTopics();
  }

  setStatus(name) {
    var currentStatus = this.checkedMap.get(name);
    if (currentStatus) // If not first time, just flip the status
    {
      this.checkedMap.set(name, !currentStatus);
    }
    else // First time
    {
      this.checkedMap.set(name, true);
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
