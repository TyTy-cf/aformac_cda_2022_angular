import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChessGameComponent} from "./chess-game/chess-game.component";
import {RegionsIndexComponent} from "./regions-index/regions-index.component";
import {DepartementsRegionComponent} from "./departements-region/departements-region.component";
import {CommunesDepartementComponent} from "./communes-departement/communes-departement.component";

const routes: Routes = [
  { path: 'chess', component: ChessGameComponent },
  { path: 'regions', component: RegionsIndexComponent },
  { path: 'regions/:codeRegion/departements', component: DepartementsRegionComponent },
  { path: 'regions/:codeRegion/departements/:codeDpt/communes', component: CommunesDepartementComponent},
  { path: 'departements', component: DepartementsRegionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
