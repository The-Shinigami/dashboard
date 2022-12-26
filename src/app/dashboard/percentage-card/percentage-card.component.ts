import { Component, Input, OnInit } from '@angular/core';
import { CardService } from 'src/app/service/card/card.service';

@Component({
  selector: 'app-percentage-card',
  templateUrl: './percentage-card.component.html',
  styleUrls: ['./percentage-card.component.css']
})
export class PercentageCardComponent implements OnInit {
  
  @Input() card: any;

  cards: any[] = [];

  constructor(private cardService: CardService) {}

  async ngOnInit() {
 const year = "2022";


    switch(this.card.title){
      case "This Year's Authors" :
        this.cardService.getCards("author",year).then(
          response =>{
            this.card.value = response.data.countL
            this.card.percentage = response.data.percentageL
          }
         );  
        break;
        case "This Year's Journals" :
          this.cardService.getCards("journal",year).then(
            response =>{
              this.card.value = response.data.countL
              this.card.percentage = response.data.percentageL
            }
           );  
        break;
        case "This Year's Universeties" :
          this.cardService.getCards("university",year).then(
            response =>{
              this.card.value = response.data.countL
              this.card.percentage = response.data.percentageL
            }
           );  
        break;
        case "New Countries" :
          this.cardService.getCards("country",year).then(
            response =>{
              this.card.value = response.data.countL
              this.card.percentage = response.data.percentageL
            }
           );  
        break;
    }
   
  }
}
