import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {UrlApi} from "../../url_api/url_api";
import {Region} from "../../models/geo-gouv/region";
import {Departement} from "../../models/geo-gouv/departement";
import {sprintf} from "sprintf-js";
import {RegionsCount} from "../../models/geo-gouv/regions-count";

@Component({
  selector: 'app-regions-index',
  templateUrl: './regions-index.component.html',
  styleUrls: ['./regions-index.component.scss']
})
export class RegionsIndexComponent implements OnInit {

  regions: Region[] = [];
  regionCountArray: RegionsCount[] = [];

  constructor(private httpService: HttpClientService) { }

  ngOnInit(): void {
    this.httpService.getRequest<Region[]>(UrlApi.urlRegions).subscribe((jsonApi) => {
      this.regions = jsonApi;
      this.regions.forEach((region) => {
        this.httpService.getRequest<Departement[]>(sprintf(UrlApi.urlDepartementsByRegion, region.code)).subscribe((jsonApi) => {
          this.regionCountArray.push({region: region, nbDepartments: jsonApi.length});
        });
      });
    });
  }

}
