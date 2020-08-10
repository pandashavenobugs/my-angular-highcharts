import { Component,OnInit } from '@angular/core';

// adding libraries to use
import {HttpClient} from "@angular/common/http";
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // to use http verbs we need to register variable related HttpClient
  constructor(private http:HttpClient){}
  title = 'chart-project';
  // updateFlag is about update the system
  updateFlag = false;
  // dont declare the HighCharts by their identifiers like that HighCharts: typeof HighCharts= HighCharts
  //because if we declare like that angular throws errors.
  //we can declare the HighCharts variable properly like that : HighCharts= HighCharts
  Highcharts= Highcharts;
  //data variable
  data:any=[];
  chartOptions = {
    chart: {
      zoomType: 'x' //we can zoom options with this code there
  },
  title: {
      text: 'USD to EUR exchange rate over time'
  },
  subtitle: {
      text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
  },
  xAxis: {
      type: 'datetime' // we can declare the type of xAxis
  },
  yAxis: {
      title: {
          text: 'Exchange rate'
      }
  },
  legend: {
      enabled: false
  },
  plotOptions: {
      area: {
          fillColor: {
              linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1
              },
              stops: [
                  [0, Highcharts.getOptions().colors[0]],
                  [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
              ]
          },
          marker: {
              radius: 2
          },
          lineWidth: 1,
          states: {
              hover: {
                  lineWidth: 1
              }
          },
          threshold: null
      }
  },

  series: [{
      type: 'area',
      name: 'USD to EUR',
      data: []
  }]

  };

  ngOnInit(){
    this.http
    .get('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json')
    .subscribe(data=>{
      //if we want to update the data Series we need to write series array again like that
      // and we need to change the updateFlag varibale into true
      // so we can update the data like that

      this.data=data;
      this.chartOptions.series=[{
        type:'area',
        name:'deneme',
        data:this.data
      }]
      this.updateFlag=true;

    })


  }
}
