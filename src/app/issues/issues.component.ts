import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  CARD = [
    {
      title: 'Total Issues',
      number: 752,
      
    },
    {
      title: 'Issues Solved',
      number: 295,
     
    },
    {
      title: 'Total Contributions',
      number: 128,
    
    },
  ];

  CASE_DATA = [
    { 
      number: 1,
      date: '01/10/21',
      description: 'gdrgsdfgsdfggsgf',
      id: 'SFH862',
    },
    { 
      number: 2,
      date: '01/10/21',
      description: 'gdrgsdfgsdfggsgf',
      id: 'SFH862',
    },
    { 
      number: 3,
      date: '01/10/21',
      description: 'gdrgsdfgsdfggsgf',
      id: 'SFH862',
    },
    { 
      number: 4,
      date: '01/10/21',
      description: 'gdrgsdfgsdfggsgf',
      id: 'SFH862',
    },
    { 
      number: 5,
      date: '01/10/21',
      description: 'gdrgsdfgsdfggsgf',
      id: 'SFH862',
    },
    { 
      number: 6,
      date: '01/10/21',
      description: 'gdrgsdfgsdfggsgf',
      id: 'SFH862',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
