import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChessGameComponent} from "./chess-game/chess-game.component";
import {RegionsIndexComponent} from "./regions-index/regions-index.component";
import {DepartementsRegionComponent} from "./departements-region/departements-region.component";
import {CommunesDepartementComponent} from "./communes-departement/communes-departement.component";
import {FormUserComponent} from "./form-user/form-user.component";
import {BattlegroundComponent} from "./battleground/battleground.component";
import {FormHeroComponent} from "./form-hero/form-hero.component";
import {HomeComponent} from "./front/home/home.component";
import {FormAccountComponent} from "./form-account/form-account.component";
import {FormPublisherComponent} from "./form-publisher/form-publisher.component";
import {GamesIndexComponent} from "./games-index/games-index.component";
import {AccountIndexComponent} from "./account-index/account-index.component";

const routes: Routes = [
  { path: 'chess', component: ChessGameComponent },
  { path: 'regions', component: RegionsIndexComponent },
  { path: 'regions/:codeRegion/departements', component: DepartementsRegionComponent },
  { path: 'regions/:codeRegion/departements/:codeDpt/communes', component: CommunesDepartementComponent},
  { path: 'departements', component: DepartementsRegionComponent },
  { path: 'form/user', component: FormUserComponent },
  { path: 'form/hero', component: FormHeroComponent },
  { path: 'form/publisher', component: FormPublisherComponent },
  { path: 'register', component: FormAccountComponent },
  { path: 'battleground', component: BattlegroundComponent },
  { path: '', component: HomeComponent },
  { path: 'games', component: GamesIndexComponent },
  { path: 'account', component: AccountIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
