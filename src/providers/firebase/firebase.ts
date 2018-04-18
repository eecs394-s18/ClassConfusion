import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
  }

  addTopic(name) {
    this.afd.list('/topics').set(name,
    {
      name: name,
      voteCount: 0,
      commentList: []
    });
  }

  removeTopic(name) {
    this.afd.list('/topics').remove(name);
  }


  getTopics() {
    return this.afd.list('/topics');
  }

  getVoteCount() {
    return this.afd.list('/topics/' + name + '/voteCount');
  }

}
