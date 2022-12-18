import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  cards = [
    { title: "Today's Money", value: "$53,000", percentage: "+55%" ,icon: "assets/img/percentage-cards-svgs/cash.svg"},
    { title: "Today's Users", value: "2,300", percentage: "+3%" ,icon: "assets/img/percentage-cards-svgs/users.svg"},
    { title: "New Clients", value: "+3,462", percentage: "-2%" ,icon: "assets/img/percentage-cards-svgs/new-clients.svg"},
    { title: "Sales", value: "$103,430", percentage: "+5%" ,icon: "assets/img/percentage-cards-svgs/sales.svg"}   
  ]
  salesChart = [
    {key:"2020",value: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      data: [450, 200, 100, 220, 500, 100, 400, 230, 500, 20, 500, 100],
      title: "Sales for 2020"
    }},
    {key:"2021",value: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      data: [40, 20, 100, 220, 500, 300, 200, 230, 600, 200, 50, 10],
      title: "Sales for 2021"
    }
    },
     {key:"2022",value: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      data: [40, 20, 100, 220, 500, 300, 200],
      title: "Sales for 2022"
    }}
  ]
  twoProductsSalesChart =  {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    product_1: {
      label:"Mobile apps",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500,550, 400, 600],
    },
    product_2: {
      label:"Web apps",
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400,500, 550, 500],
        }
      }
  TopSalesDoughnutChart = {
    labels: ["Nike", "Adidas", "Puma", "Reebok", "Asics"],
    data:[12, 19, 3, 5,6],
    title : "Top Products Sales "
  }
  Projects = [
    { task: "Soft UI XD Version", members: [], budget: "14,000", completion: "" },
    { task: "Add Progress Track", members: [], budget: "3,000", completion: "" },
    { task: "Fix Platform Errors", members: [], budget: "Not Set", completion: "" },
    { task: "Launch our Mobile App", members: [], budget: "20,500", completion: "" },
    { task: "Add the New Pricing Page", members: [], budget: "500", completion: "" },
    { task: "Redesign New Online Shop", members: [], budget: "2,000", completion: "" },
    
  ];
  constructor() {}

  ngOnInit(): void {
       
   
      }

  

}
