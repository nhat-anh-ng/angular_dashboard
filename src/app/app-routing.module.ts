import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { IssuesComponent } from './issues/issues.component';
import { ResolutionsComponent } from './resolutions/resolutions.component';
import { CaseComponent } from './case/case.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
 
  { path: '', component: IssuesComponent },
  { path: 'resolutions', component: ResolutionsComponent },
  { path: 'case', component: CaseComponent },
  { path: 'my_profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
