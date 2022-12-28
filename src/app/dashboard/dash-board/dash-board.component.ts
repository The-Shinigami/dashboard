import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  cards = [
    { title: "This Year's Authors", value: "0", percentage: "0%" ,icon: "assets/img/percentage-cards-svgs/users.svg"},
    { title: "This Year's Journals", value: "0", percentage: "0%" ,icon: "assets/img/percentage-cards-svgs/cash.svg"},
    { title: "This Year's Universeties", value: "0", percentage: "+0%" ,icon: "assets/img/percentage-cards-svgs/new-clients.svg"},
    { title: "New Countries", value: "0", percentage: "+0%" ,icon: "assets/img/percentage-cards-svgs/sales.svg"}   
  ]
journalsChart = [
    {key:"2020",value: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      data: [450, 200, 100, 220, 500, 100, 400, 230, 500, 20, 500, 100],
      title: "Journals for 2020"
    }},
    {key:"2021",value: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      data: [40, 20, 100, 220, 500, 300, 200, 230, 600, 200, 50, 10],
      title: "Journals for 2021"
    }
    },
     {key:"2022",value: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      data: [40, 20, 100, 220, 500, 300, 200],
      title: "Sales for 2022"
    }}
  ]
  twoCountriesJournalsChart =  {
      labels: ["2017", "2018", "2020", "2020",],
      values :[
       {
          label:"Chine",
          data: [50, 40, 300, 0],
        },
      {
          label:"Span",
          data: [30, 0, 40, 140],
            }
      ]
      }
  TopSalesDoughnutChart = {
    labels: ["Q1", "Q2", "Q3", "Q2", "Q5"],
    data:[12, 19, 3, 5,6],
    title : "Quartiles percentage in 2022"
  }
  journals = [
    { title: "Soft UI XD Version", authors: ["a","b"], year: "14,000", quartile: "" },
    { title: "Add Progress Track", authors: ["a","b"], year: "3,000", quartile: "" },
    { title: "Fix Platform Errors", authors: ["a","b"], year: "Not Set", quartile: "" },
    { title: "Launch our Mobile App", authors: ["a","b"], year: "20,500", quartile: "" },
    { title: "Add the New Pricing Page", authors: ["a","b"], year: "500", quartile: "" },
    { title: "Redesign New Online Shop", authors: ["a","b"], year: "2,000", quartile: "" },
    
  ];
  constructor() {}

  ngOnInit(): void {
       
   
      }

  

}
