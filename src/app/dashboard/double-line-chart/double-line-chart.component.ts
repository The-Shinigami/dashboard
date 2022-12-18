import { Component,Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {  registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-double-line-chart',
  templateUrl: './double-line-chart.component.html',
  styleUrls: ['./double-line-chart.component.css']
})
export class DoubleLineChartComponent implements OnInit {
  
  @Input() labels: any;
  @Input() product_1: any;
  @Input() product_2: any;

  selectedYear: string = "2020";

  myChart: any;
  constructor() { }

  ngOnInit(): void {
    var canvas = <HTMLCanvasElement>document.getElementById('chart-line');
      var ctx2 = canvas.getContext("2d");

    var gradientStroke1 = ctx2?.createLinearGradient(0, 230, 0, 50);

    gradientStroke1?.addColorStop(1, 'rgba(203,12,159,0.2)');
    gradientStroke1?.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke1?.addColorStop(0, 'rgba(203,12,159,0)'); //purple colors

    var gradientStroke2 = ctx2?.createLinearGradient(0, 230, 0, 50);

    gradientStroke2?.addColorStop(1, 'rgba(20,23,39,0.2)');
    gradientStroke2?.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke2?.addColorStop(0, 'rgba(20,23,39,0)'); //purple colors

   this.myChart = new Chart("chart-line", {
      type: "line",
      data: {
        labels: this.labels,
        datasets: [
          {
            label: this.product_1.label,
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 0,
            borderColor: "#cb0c9f",
            backgroundColor: gradientStroke1,
            fill: true,
            data: this.product_1.data,

          },
          {
            label: this.product_2.label,
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 0,
            borderColor: "#3A416F",
            backgroundColor: gradientStroke2,
            fill: true,
            data: this.product_2.data,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              padding: 10,
              color: '#b2b9bf',
              font: {
                size: 11,
                family: "Open Sans",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              color: '#b2b9bf',
              padding: 20,
              font: {
                size: 11,
                family: "Open Sans",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
        },
      },
    });
  }
  selectYear(event:Event) {
   var target = event.target as HTMLElement|| event.srcElement as HTMLElement|| event.currentTarget as HTMLElement;
    this.selectedYear = target.innerText;
    /* this.selectedYearSalesChart = this.salesChart.find((x: any) => x.key == this.selectedYear);
    this.myChart.data.labels = this.selectedYearSalesChart.value.labels;
    this.myChart.data.datasets[0].data = this.selectedYearSalesChart.value.data; */
    this.myChart.update();
  }

}
