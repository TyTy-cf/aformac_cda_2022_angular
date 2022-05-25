import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../../services/http-client.service";
import {IApiResponse} from "../../../models/steamish/i-api-response";
import {Game} from "../../../models/steamish/game";
import {UrlApi} from "../../../url_api/url_api";

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
    this.httpService.getRequest<IApiResponse<Game>>(UrlApi.urlGameAll).subscribe((json) => {
      this.gamesAlpha = json.items.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 9);
      this.gamesPublishedAt = json.items.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 9);
      console.log(this.gamesPublishedAt);
    });
  }

}
