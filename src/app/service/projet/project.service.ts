import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }


  getPublications() {
    return  axios.get('http://localhost:4567/publications',{
      params: {
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
 
}
