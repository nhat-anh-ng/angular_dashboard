import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { IssuesComponent } from './issues/issues.component';
import { ResolutionsComponent } from './resolutions/resolutions.component';
import { CaseComponent } from './case/case.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssuesComponent,
    ResolutionsComponent,
    CaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule
    
  ],
  exports: [
    MatSidenavModule
  ],
  entryComponents: [CaseComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
