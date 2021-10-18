import { Component, OnInit } from '@angular/core';

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
      therapist: 'gdrgsdfgsdfggsgf',
      id: 'SFH862',
    },
    { 
      number: 2,
      date: '01/10/21',
      therapist: 'gdrgsdfgsdfggsgf',
      id: 'SFH862',
    },
    { 
      number: 3,
      date: '01/10/21',
      therapist: 'gdrgsdfgsdfggsgf',
      id: 'SFH862',
    },
    { 
      number: 4,
      date: '01/10/21',
      therapist: 'gdrgsdfgsdfggsgf',
      id: 'SFH862',
    },
    { 
      number: 5,
      date: '01/10/21',
      therapist: 'gdrgsdfgsdfggsgf',
      id: 'SFH862',
    },
    { 
      number: 6,
      date: '01/10/21',
      therapist: 'gdrgsdfgsdfggsgf',
      id: 'SFH862',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
