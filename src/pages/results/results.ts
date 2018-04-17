import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})

export class ResultsPage {

    @ViewChild('barCanvas') barCanvas;
    @ViewChild('doughnutCanvas') doughnutCanvas;


    barChart2: any;
    barChart: any;
    doughnutChart: any;

    constructor(public navCtrl: NavController) {

    }

    ionViewDidLoad() {

        this.barChart = new Chart(this.barCanvas.nativeElement, {

            type: 'horizontalBar',
            data: {
                labels: ["Graph Theory", "DP", "Data Structures", "Systems", "Binary"],
                datasets: [

                {
                    label: 'Did Understand',
                    data: [14, 1, 8, 5, 10],
                    backgroundColor: ['#D6E9C6', '#D6E9C6', '#D6E9C6', '#D6E9C6', '#D6E9C6']//[
                        // 'rgba(255, 99, 132, 0.2)',
                        // 'rgba(54, 162, 235, 0.2)',
                        // 'rgba(255, 206, 86, 0.2)',
                        // 'rgba(75, 192, 192, 0.2)',
                        // 'rgba(153, 102, 255, 0.2)'
                    //],
                    // borderColor: [
                    //     'rgba(255,99,132,1)',
                    //     'rgba(54, 162, 235, 1)',
                    //     'rgba(255, 206, 86, 1)',
                    //     'rgba(75, 192, 192, 1)',
                    //     'rgba(153, 102, 255, 1)'
                    // ],
                    // borderWidth: 1
                },

                {
                    label: 'Did not Understand',
                    data: [4, 17, 10, 13, 8],
                    backgroundColor: ['#EBCCD1', '#EBCCD1', '#EBCCD1', '#EBCCD1', '#EBCCD1'] // red, //[
                    //     'rgba(255, 99, 132, 0.2)',
                    //     'rgba(54, 162, 235, 0.2)',
                    //     'rgba(255, 206, 86, 0.2)',
                    //     'rgba(75, 192, 192, 0.2)',
                    //     'rgba(153, 102, 255, 0.2)'
                    // ],
                    // borderColor: [
                    //     'rgba(255,99,132,1)',
                    //     'rgba(54, 162, 235, 1)',
                    //     'rgba(255, 206, 86, 1)',
                    //     'rgba(75, 192, 192, 1)',
                    //     'rgba(153, 102, 255, 1)'
                    // ],
                    // borderWidth: 1
                },



                ]
            },
            options: {
                scales: {
                    xAxes: [{ stacked: true}],
                    yAxes: [

                        {
                        ticks: {beginAtZero:true}, stacked:true
                        },
                        // { stacked: true}

                    ]
                }
            }

        });

        // find which topic was the least understood and send that to the html automatically
        var lowestUnderstood = Math.max.apply(Math, this.barChart.data.datasets[1].data);
        console.log(lowestUnderstood);

        var worstTopicIndex = (this.barChart.data.datasets[1].data).indexOf(lowestUnderstood);
        var worstTopic = this.barChart.data.labels[worstTopicIndex];
        console.log(worstTopic)
        console.log(worstTopicIndex)

        document.getElementById('WorstTopic').innerHTML = worstTopic;

        // this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

        //     type: 'doughnut',
        //     data: {
        //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        //         datasets: [{
        //             label: '# of Votes',
        //             data: [12, 19, 3, 5, 2, 3],
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)'
        //             ],
        //             hoverBackgroundColor: [
        //                 "#FF6384",
        //                 "#36A2EB",
        //                 "#FFCE56",
        //                 "#FF6384",
        //                 "#36A2EB",
        //                 "#FFCE56"
        //             ]
        //         }]
        //     }

        // });


    }


}
