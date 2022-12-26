import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {  registerables } from 'chart.js';
import { BarService } from 'src/app/service/bar/bar.service';
Chart.register(...registerables);
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
 /*  @Input() labels: any;
  @Input() data: any;
  @Input() title: string = "Sales"; */
  @Input() journalsChart :any;
  selectedYear: string = "2020";
  selectedYearSalesChart: any ;
  years:string[] = [];
  myChart: any;
  load:boolean = false;

/*   title =this.journalsChart[this.journalsChart.length - 1].title; */
  constructor(private barService:BarService) { 
  }
 
  
  ngOnInit(): void {

    this.barService.getBars().then(
      response =>{
        this.load = true;
        this.journalsChart = response.data
        this.selectedYear = this.journalsChart[0].key;
        this.selectedYearSalesChart = this.journalsChart.find((x: any) => x.key == this.selectedYear);
        this.journalsChart.map((x: any) => this.years.push(x.key));
        
         this.myChart = new Chart('chart-bars', {
          type: "bar",
          data: {
            labels: this.selectedYearSalesChart.value.labels,
            datasets: [{
              label: "Journals",
              borderWidth: 0,
              borderRadius: 4,
              borderSkipped: false,
              backgroundColor: "#fff",
              data:this.selectedYearSalesChart.value.data,
              maxBarThickness: 6
            }, ],
          },
          options: {
           maintainAspectRatio: false,
           responsive: true,
            plugins: {
              legend: {
                display: false,
              }
            },
            interaction: {
              intersect: false,
              mode: 'index',
            },
            scales: {
              y: {
                grid: {
                  drawBorder: false,
                  display: false,
                  drawOnChartArea: false,
                  drawTicks: false,
                },
                ticks: {
                  padding: 0,
                  font: {
                    size: 14,
                    family: "Open Sans",
                    style: 'normal',
                    lineHeight: 2
                  },
                  color: "#fff"
                },
              },
              x: {
                grid: {
                  drawBorder: false,
                  display: false,
                  drawOnChartArea: false,
                  drawTicks: false
                },
                ticks: {
                  display: false
                },
              },
              
            },
           
           },
          
             }); 
      }
    )
  
  }
  
  

  selectYear(event:Event) {
   var target = event.target as HTMLElement|| event.srcElement as HTMLElement|| event.currentTarget as HTMLElement;
    this.selectedYear = target.innerText;
    this.selectedYearSalesChart = this.journalsChart.find((x: any) => x.key == this.selectedYear);
    this.myChart.data.labels = this.selectedYearSalesChart.value.labels;
    this.myChart.data.datasets[0].data = this.selectedYearSalesChart.value.data;
    this.myChart.update();
  }

}


