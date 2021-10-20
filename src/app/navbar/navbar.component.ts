import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showFiller = false;

  menuData = [
    {
      type: 'report_problem',
      text: 'Issues',
      link: '',
    },
    {
      type: 'task_alt',
      text: 'Solutions',
      link: 'solutions',
    },
    {
      type: 'perm_identity',
      text: 'My Profile',
      link: 'my_profile',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
