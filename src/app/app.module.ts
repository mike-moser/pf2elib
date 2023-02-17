import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'  
import { CreatureListComponent } from './creature-list/creature-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatureDetailsComponent } from './creature-details/creature-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatureListComponent,
    CreatureDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: '', component: CreatureListComponent},
      { path: 'creature/:creatureId', component: CreatureDetailsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
