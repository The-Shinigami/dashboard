import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor() { }


  getBars() {
    return  axios.get('http://localhost:4567/bars',{
      params: {},
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
