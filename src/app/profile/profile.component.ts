import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  CARD = [
    {
      title: 'Contributions',
      number: 752,
    },
    {
      title: 'Days Active',
      number: 295,
    },
    {
      title: 'Score',
      number: 592,
    },
  ];

  CARD1 = [
    {
      title: 'Settings',
      number: 752,
      icon: 'settings',
    },
    {
      title: 'Statistics',
      number: 295,
       icon: 'bar_chart',
    },
    {
      title: 'Messages',
      number: 592,
      icon: 'chat',
    },
  ];

  CARD2 = [
    {
      title: 'Referrals',
      number: 752,
      icon: 'rate_review',
    },
    {
      title: 'Support',
      number: 295,
      icon: 'support_agent',
    },
    {
      title: 'My Data',
      number: 592,
      icon: 'info',
    },
  ];
   
  constructor() { }

  ngOnInit(): void {
  }

}
