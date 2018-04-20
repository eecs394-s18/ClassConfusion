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
        this.presentDuplicateAlert();
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

  addSpecificTopic(name, votes) {
    if (name.length === 0) { return; } 
    if (votes <= 1) { votes = 0 }
    this.topicsRef.child(name).once('value', (snapshot) => {
      if (snapshot.exists()) {
        this.presentDuplicateAlert();
      }
      else {
        this.topicsRef.child(name); // Create new child...
        this.topicsRef.child(name).set(
        {
          name: name,
          voteCount: votes,
        });
        this.getTopics(); // Reload the topicList
      }
    });
  }

  editTopic(oldName) {
    console.log("Edit topic " + name);
    let alert = this.alertCtrl.create({
      title: 'Change Topic',
      inputs: [
        {
          name: 'newName',
          placeholder: oldName
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: data => {
            if (data.newName) // Something was entered
            {
              this.topicsRef.child(data.newName).once('value', (snapshot) => {
                if (snapshot.exists()) // Duplicate name; do nothing
                {
                  this.presentDuplicateAlert();
                }
                else 
                {
                  // Update the name here
                  this.getTopics(); // Reload the topicList
                  var child = this.topicsRef.child(oldName);
                  child.once('value', (snapshot) => {
                    var votes = snapshot.val().voteCount;
                    this.removeTopic(oldName);
                    // Update map, if was checked remove vote in the next line
                    // DO THIS HERE
                    this.addSpecificTopic(data.newName, votes);
                    this.getTopics();
                  });
                }
              });
            }
            else // Nothing entered ; do nothing
            {
              let noChangeAlert = this.alertCtrl.create({
                title: 'No topic name entered!',
                subTitle: 'Please try again.',
                buttons: ['Dismiss']
              });
              noChangeAlert.present();
            }
          }
        }
      ]
    });
    alert.present();
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

  presentDuplicateAlert() {
    let alert = this.alertCtrl.create({
      title: 'This item is already in the list!',
      subTitle: 'Please try again.',
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
