import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {UrlApi} from "../../url_api/url_api";
import {Region} from "../../models/geo-gouv/region";

@Component({
  selector: 'app-regions-index',
  templateUrl: './regions-index.component.html',
  styleUrls: ['./regions-index.component.scss']
})
export class RegionsIndexComponent implements OnInit {

  regions: Region[] = []

  constructor(private httpService: HttpClientService) { }

  ngOnInit(): void {
    this.httpService.getRequest<Region[]>(UrlApi.urlRegions).subscribe((jsonApi) => {
      this.regions = jsonApi;
    });
  }

}
