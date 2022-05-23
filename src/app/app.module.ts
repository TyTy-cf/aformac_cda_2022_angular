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
import { BreadCrumbsGeoApiComponent } from './bread-crumbs-geo-api/bread-crumbs-geo-api.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormUserComponent } from './form-user/form-user.component';
import { BattlegroundComponent } from './battleground/battleground.component';
import { FormHeroComponent } from './form-hero/form-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessGameComponent,
    NavbarComponent,
    RegionsIndexComponent,
    DepartementsRegionComponent,
    CommunesDepartementComponent,
    BreadCrumbsGeoApiComponent,
    FormUserComponent,
    BattlegroundComponent,
    FormHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // form par le template
    ReactiveFormsModule, // form par le code
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
