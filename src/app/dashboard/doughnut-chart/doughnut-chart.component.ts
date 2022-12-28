import { AfterViewInit, Component,ElementRef,Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DonutService } from 'src/app/service/donut/donut.service';
Chart.register(...registerables);


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit,AfterViewInit {

  @Input() labels: any;
  @Input() data: any;
  @Input() title: string = "Quartiles";

  @ViewChild("yearInput") yearInput !: ElementRef<HTMLInputElement>; 
  @ViewChild("percentageInput") percentageInput!: ElementRef<HTMLInputElement>;
  @ViewChild("valueInput") valueInput!: ElementRef<HTMLInputElement>;
  @ViewChild("nullInput") nullInput!: ElementRef<HTMLInputElement>;
  @ViewChild("percentage") percentageLabel!: ElementRef<HTMLInputElement>;
  @ViewChild("value") valueLabel!: ElementRef<HTMLInputElement>;
  
  myChart: any;

  doughnutChartForm: FormGroup;
  constructor(private donutService:DonutService
    ) {
    this.doughnutChartForm = new FormGroup({
      year: new FormControl('2021'),
      labelName: new FormControl('percentage'),
    });

  }
  
  ngAfterViewInit(): void {
    const d = new Date();
    const year = d.getFullYear();
    this.yearInput.nativeElement.max = String(year);
    this.yearInput.nativeElement.style.borderRadius = "5px";
  }
  
  
  ngOnInit(): void {
    this.donutService.getDonut(this.doughnutChartForm.get('year')?.value).then(response =>{
      this.labels =response.data.labels;
      this.data = response.data.data;
      this.title = response.data.tile;

     this.myChart = new Chart('chart-doughnut', {
      type: 'doughnut',
        plugins: [ChartDataLabels],
      data: {
   labels: this.labels,
   datasets: [{
     label: '',
     data: this.data,
     backgroundColor: [
       "rgba( 105, 210, 231, 0.5)",
        "rgba(192,192,192, 0.5)",
       "rgba(32,178,170, 0.5)",
       "rgba(222,184,135, 0.5)",
            "rgba(238,130,238, 0.5)"
     ],
     borderColor: [
     "rgba( 105, 210, 231, 1)",
       "rgba(192,192,192, 1)",
        "rgba(32,178,170, 1)",
       "rgba(222,184,135, 1)",
         "rgba(238,130,238, 1)"
     ],
     borderWidth: 3
   }]
 },
      options: {
   maintainAspectRatio: false,
   responsive: true,
        plugins: {
          datalabels: {           
            color: '#000',
            font: {
              size: 0,
              weight: 'bold'               
            },

            formatter: (value:any) => {
              return value + '%';
            }
   
          },
          title: {
               display: true,
            text: this.title,
            font: {
              size: 24,
              weight: 'bold'
            }
           }
        },
 }
}); 
    })
  }

  
  

  onSubmit() {
   
    this.donutService.getDonut(this.doughnutChartForm.get('year')?.value).then(
      response =>{

        this.myChart.options.plugins.title.text = response.data.title;

        this.myChart.data =  {
          labels: response.data.labels,
          datasets: [{
            label: '',
            data: response.data.data,
            backgroundColor: [
              "rgba( 105, 210, 231, 0.5)",
               "rgba(192,192,192, 0.5)",
              "rgba(32,178,170, 0.5)",
              "rgba(222,184,135, 0.5)",
                   "rgba(238,130,238, 0.5)"
            ],
            borderColor: [
            "rgba( 105, 210, 231, 1)",
              "rgba(192,192,192, 1)",
               "rgba(32,178,170, 1)",
              "rgba(222,184,135, 1)",
                "rgba(238,130,238, 1)"
            ],
            borderWidth: 3
          }]
        },

        this.labels =response.data.labels;
        this.data = response.data.data;
        this.title = response.data.tile;

         
    switch (this.doughnutChartForm.get('labelName')?.value) { 
      case "percentage":
        {
          this.myChart.options.plugins.datalabels = {
            color: '#000',
            font: {
              size: 14,
              weight: 'bold'
            },

            formatter: (valueS: any) => {
              var value = Number(valueS)      
              return (((value*100)/this.data.reduce((partialSum:any, a:any) => Number(partialSum) + Number(a), 0))).toPrecision(3) + '%';
            }
    
          };
        }
        break;
      case "value":
        {
          this.myChart.options.plugins.datalabels = {
            display: true,        
              color: '#000',
            font: {
              weight: 'bold',
              size: 14
            }
          };
        }
        break;
      case "null":
         this.myChart.options.plugins.datalabels.font.size = 0;
    }
  
        this.myChart.update();
    });


  
  }

  pick(element:HTMLElement) {

    if (element.classList.contains("tw-border-4")) {
      element.classList.remove("tw-border-4");
      this.doughnutChartForm.get('labelName')?.setValue("null");
      
      /* uncheck all radio inputs(check null) */
      this.percentageInput.nativeElement.setAttribute("checked", "false");
      this.valueInput.nativeElement.setAttribute("checked", "false");
      this.nullInput.nativeElement.setAttribute("checked", "true");

    }
    else
      if( !this.valueLabel.nativeElement.classList.contains("tw-border-4") && !this.percentageLabel.nativeElement.classList.contains("tw-border-4")){
        element.classList.add("tw-border-4");
      }
      else {
        this.valueLabel.nativeElement.classList.toggle("tw-border-4");
        this.percentageLabel.nativeElement.classList.toggle("tw-border-4");
    }
     
  }
}
