import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CaseComponent } from '../case/case.component';

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
      title: 'Issues Unsolved',
      number: 592,
    
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
  
    constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CaseComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

  ngOnInit(): void {
  }

}
