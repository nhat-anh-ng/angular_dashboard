import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;

  menuData = [
    {
      type: 'report_problem',
      text: 'Issues',
    },
    {
      type: 'task_alt',
      text: 'Resolutions',
    },
    {
      type: 'perm_identity',
      text: 'My Profile',
    },
  ]
}
