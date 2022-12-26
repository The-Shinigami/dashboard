import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})

export class CardService {

  constructor() { }

   getCards(title:string,year:string) {
    return  axios.get('http://localhost:4567/cards',{
      params: {
        title: title,
        year: year
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
