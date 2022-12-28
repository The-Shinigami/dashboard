import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/service/projet/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input() journals :any[] = []
   header :string[] = ["Title","Authors","Quartile","Year"]

  constructor(private projectService:ProjectService) { }


  data: any[] =  [{
    title: "The Ui jounrla",
    authors: ["alon thomas","kinder jonson","alon thomas"],
    quartile: "Q1",
    year: "2020"
  }];

  ngOnInit(): void {
    this.projectService.getPublications().then(response =>{
      this.data = response.data;
    })

  }

   wrapTitle(title:string) {
    // Split the title into an array of words
    const words = title.split(' ');
  
    // Set the maximum number of words per line
    const maxWordsPerLine = 5;
  
    // Initialize a new string to hold the wrapped title
    let wrappedTitle = '';
  
    // Loop through the words in the title
    for (let i = 0; i < words.length; i++) {
      // Add the current word to the wrapped title string
      wrappedTitle += words[i] + ' ';
  
      // If the current word is the last word in the title, or if we have reached the maximum number of words per line, add a line break
      if (i === words.length - 1 || (i + 1) % maxWordsPerLine === 0) {
        wrappedTitle += '\n';
      }
    }
  
    return wrappedTitle;
  }

}
