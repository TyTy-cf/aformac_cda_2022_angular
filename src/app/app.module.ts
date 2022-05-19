import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessGameComponent } from './chess-game/chess-game.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { RegionsIndexComponent } from './regions-index/regions-index.component';
import { DepartementsRegionComponent } from './departements-region/departements-region.component';
import { CommunesDepartementComponent } from './communes-departement/communes-departement.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessGameComponent,
    NavbarComponent,
    RegionsIndexComponent,
    DepartementsRegionComponent,
    CommunesDepartementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
