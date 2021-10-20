import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SolutionComponent } from '../solution/solution.component';

@Component({
  selector: 'app-resolutions',
  templateUrl: './resolutions.component.html',
  styleUrls: ['./resolutions.component.scss']
})
export class ResolutionsComponent implements OnInit {
  RESOLUTION = [
    { 
      number: 1,
      date: '01/10/21',
      therapist: 'gdrgsdfgsd',
      id: 'SFH862',
    },
    { 
      number: 2,
      date: '01/10/21',
      therapist: 'gdrgsdfgsd',
      id: 'SFH862',
    },
    { 
      number: 3,
      date: '01/10/21',
      therapist: 'gdrgsdfgsd',
      id: 'SFH862',
    },
    { 
      number: 4,
      date: '01/10/21',
      therapist: 'gdrgsdfgsd',
      id: 'SFH862',
    },
    { 
      number: 5,
      date: '01/10/21',
      therapist: 'gdrgsdfgsd',
      id: 'SFH862',
    },
    { 
      number: 6,
      date: '01/10/21',
      therapist: 'gdrgsdfgsd',
      id: 'SFH862',
    },
    { 
      number: 7,
      date: '01/10/21',
      therapist: 'gdrgsdfgsd',
      id: 'SFH862',
    },
    { 
      number: 8,
      date: '01/10/21',
      therapist: 'gdrgsdfgsd',
      id: 'SFH862',
    },
    { 
      number: 9,
      date: '01/10/21',
      therapist: 'gdrgsdfgsd',
      id: 'SFH862',
    },
    { 
      number: 10,
      date: '01/10/21',
      therapist: 'gdrgsdfgsd',
      id: 'SFH862',
    },
     { 
      number: 7,
      date: '01/10/21',
      therapist: 'gdrgsdfgsd',
      id: 'SFH862',
    },
    { 
      number: 8,
      date: '01/10/21',
      therapist: 'gdrgsdfgsd',
      id: 'SFH862',
    },
    { 
      number: 9,
      date: '01/10/21',
      therapist: 'gdrgsdfgsd',
      id: 'SFH862',
    },
    { 
      number: 10,
      date: '01/10/21',
      therapist: 'gdrgsdfgsd',
      id: 'SFH862',
    },
  ];
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(SolutionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
