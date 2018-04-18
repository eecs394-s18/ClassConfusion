import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CourseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CourseProvider {

  currentCourse: string = "EECS 336";

  constructor(public http: HttpClient) {
    console.log('Hello CourseProvider Provider');
  }

  updateCurrentCourse(newCourse:string) {
    console.log('Changing course to ' + newCourse);
    this.currentCourse = newCourse;
  }

}


// ERROR
// Trying to get courseProvider working
// Says error is not importing httpClient or smth
