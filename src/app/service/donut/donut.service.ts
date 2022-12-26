import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DonutService {


  constructor() { }

  getDonut() {
   return  axios.get('http://localhost:4567/donut',{
     params: {
     },
     headers: {
       'Content-Type': 'application/json'
     }
   });
 }
}
