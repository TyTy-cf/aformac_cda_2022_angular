import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {IApiResponse} from "../../models/steamish/i-api-response";
import {Game} from "../../models/steamish/game";
import {sprintf} from "sprintf-js";
import {UrlApi} from "../../url_api/url_api";
import {Account} from "../../models/steamish/account";

@Component({
  selector: 'app-account-index',
  templateUrl: './account-index.component.html',
  styleUrls: ['./account-index.component.scss']
})
export class AccountIndexComponent implements OnInit {

  apiResponse: IApiResponse<Account>|undefined;

  constructor(
    private httpService: HttpClientService
  ) { }

  ngOnInit(): void {
    this.updateDataPaginated(1);
  }

  updateDataPaginated(page: number) {
    this.httpService.getRequest<IApiResponse<Account>>(sprintf(UrlApi.urlAccountGet, page, 18)).subscribe((json) => {
      this.apiResponse = json;
    });
  }
}
