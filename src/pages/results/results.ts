import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseApp } from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

// so, this gets actual topics and votes now, but it doesn't update automatically when the topic page
// both gets a new topic and gets a new vote.

@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})

export class ResultsPage {

    @ViewChild('barCanvas') barCanvas;

    barChart: any;

    private db = null;

    constructor(public firebaseProvider: FirebaseProvider, private fbApp: FirebaseApp) {

        this.db = this.fbApp.database();

    }


    ionViewDidLoad() {


        let voteArray = [];
        let nameArray = [];
        let colorArray = []
        var voteCountRef = this.db.ref('topics/');

        voteCountRef.on('value', function(snapshot) {
              console.log(snapshot.val());
              snapshot.forEach(snap => {
                voteArray.push(snap.val()['voteCount']);
                nameArray.push(snap.val()['name']);
              });

              console.log("Vote array: ");
              console.log(voteArray);

              console.log("Name array: ");
              console.log(nameArray);

              // make an array of size nameArray filled with red
              for(var i = 0; i < nameArray.length; i++){
                  colorArray.push('#ff5c33');
              }
              console.log(colorArray)

            var lowestUnderstood = Math.max(...voteArray);
            console.log(lowestUnderstood);

            var worstTopicIndex = (voteArray).indexOf(lowestUnderstood);
            var worstTopic = nameArray[worstTopicIndex];
            console.log(worstTopic)
            console.log(worstTopicIndex)

            document.getElementById('WorstTopic').innerHTML = worstTopic;
            // document.getElementById('WorstTopic').innerHTML = "hi";

        });


        this.barChart = new Chart(this.barCanvas.nativeElement, {

            type: 'horizontalBar',
            data: {
                // labels: ["Graph Theory", "DP", "Data Structures", "Systems", "Binary"],
                labels: nameArray,
                datasets: [

                // Leaving this out for now until we have a way to count number of users
                // (Then the data would be a new array of like totalusers - voteArray)
                // {
                //     label: 'Did Understand',
                //     data: voteArray,
                //     backgroundColor: colorArray

                // },

                {
                    label: 'Did not Understand',
                    data: voteArray,
                    backgroundColor: colorArray
                },



                ]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }

            // put this back in after we have the "did understand"
            // options: {
            //     scales: {

            //         xAxes: [

            //             {
            //             ticks: {beginAtZero:true} //, stacked:true
            //             },
            //             // { stacked: true}

            //         ],
            //         yAxes: [

            //             {
            //             ticks: {beginAtZero:true} //, stacked:true
            //             },
            //             // { stacked: true}

            //         ]
            //     }
            // }

        });


    }


}
