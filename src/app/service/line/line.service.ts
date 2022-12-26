import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LineService {

  constructor() { }

  getLines() {
   return  axios.get('http://localhost:4567/lines',{
     params: {
     },
     headers: {
       'Content-Type': 'application/json'
     }
   });
 }
}
