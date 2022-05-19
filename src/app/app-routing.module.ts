import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChessGameComponent} from "./chess-game/chess-game.component";
import {RegionsIndexComponent} from "./regions-index/regions-index.component";

const routes: Routes = [
  { path: 'chess', component: ChessGameComponent },
  { path: 'regions', component: RegionsIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
