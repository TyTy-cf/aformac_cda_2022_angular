import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../../services/http-client.service";
import {IApiResponse} from "../../../models/steamish/i-api-response";
import {Game} from "../../../models/steamish/game";
import {UrlApi} from "../../../url_api/url_api";
import {sprintf} from "sprintf-js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gamesAlpha: Game[] = [];
  gamesPrices: Game[] = [];
  gamesPublishedAt: Game[] = [];

  constructor(private httpService: HttpClientService) { }

  ngOnInit(): void {
    this.httpService.getRequest<IApiResponse<Game>>(sprintf(UrlApi.urlGameFilter,'publishedAt', 'desc', 9)).subscribe((json) => {
      this.gamesPublishedAt = json.items;
    });
    this.httpService.getRequest<IApiResponse<Game>>(sprintf(UrlApi.urlGameFilter,'price', 'desc', 9)).subscribe((json) => {
      this.gamesPrices = json.items;
    });
    this.httpService.getRequest<IApiResponse<Game>>(sprintf(UrlApi.urlGameFilter,'name', 'asc', 9)).subscribe((json) => {
      this.gamesAlpha = json.items;
    });
  }

}
