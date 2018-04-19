import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
  }

  getTopics() {
    return this.afd.list('/topics');
  }

  getVoteCount() {
    return this.afd.list('/topics/' + name + '/voteCount');
  }

}
