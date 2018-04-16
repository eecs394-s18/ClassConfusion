import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
  }

  getTopics() {
    return this.afd.list('/topics');
  }

  addTopic(name) {
    this.afd.list('/topics').set(name,
    {
      name: name,
      voteCount: 0,
      commentList: []
    });
  }

  removeTopic(id) {
    this.afd.list('/topics').remove(id);
  }
}
