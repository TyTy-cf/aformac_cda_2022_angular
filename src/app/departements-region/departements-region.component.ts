import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Departement} from "../../models/geo-gouv/departement";
import {Region} from "../../models/geo-gouv/region";
import {HttpClientService} from "../../services/http-client.service";
import {UrlApi} from "../../url_api/url_api";
import {sprintf} from "sprintf-js";

@Component({
  selector: 'app-departements-region',
  templateUrl: './departements-region.component.html',
  styleUrls: ['./departements-region.component.scss']
})
export class DepartementsRegionComponent implements OnInit {

  region: Region|undefined;
  departments: Departement[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpClientService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let codeReg: string = '';
      codeReg = params.codeRegion;
      if (codeReg) {
        this.httpService.getRequest<Region>(UrlApi.urlRegions + codeReg).subscribe((json) => {
          this.region = json;
          if (this.region) {
            this.httpService.getRequest<Departement[]>(sprintf(UrlApi.urlDepartmentsByRegion, codeReg)).subscribe((json) => {
              this.departments = json;
            });
          }
        });
      } else {
        this.httpService.getRequest<Departement[]>(UrlApi.urlDepartmentsAll).subscribe((json) => {
          this.departments = json;
        });
      }
    });
  }

}
