import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {IApiResponse} from "../../models/steamish/i-api-response";
import {Game} from "../../models/steamish/game";
import {UrlApi} from "../../url_api/url_api";
import {sprintf} from "sprintf-js";

@Component({
  selector: 'app-games-index',
  templateUrl: './games-index.component.html',
  styleUrls: ['./games-index.component.scss']
})
export class GamesIndexComponent implements OnInit {

  apiResponse: IApiResponse<Game>|undefined;

  constructor(
    private httpService: HttpClientService
  ) { }

  ngOnInit(): void {
    this.updateDataPaginated(1);
  }

  updateDataPaginated(page: number) {
    this.httpService.getRequest<IApiResponse<Game>>(sprintf(UrlApi.urlGame, page, 9)).subscribe((json) => {
      this.apiResponse = json;
    });
  }
}
