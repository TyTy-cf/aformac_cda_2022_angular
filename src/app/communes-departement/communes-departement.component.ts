import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {ActivatedRoute} from "@angular/router";
import {Commune} from "../../models/geo-gouv/commune";
import {sprintf} from "sprintf-js";
import {UrlApi} from "../../url_api/url_api";
import {Departement} from "../../models/geo-gouv/departement";
import {Region} from "../../models/geo-gouv/region";
import {forkJoin, Observable} from "rxjs";

@Component({
  selector: 'app-communes-departement',
  templateUrl: './communes-departement.component.html',
  styleUrls: ['./communes-departement.component.scss']
})
export class CommunesDepartementComponent implements OnInit {

  region: Region|undefined;
  department: Departement|undefined;
  communes: Commune[] = [];

  constructor(
    private httpService: HttpClientService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let codeReg: string = '';
    let codeDpt: string = '';
    this.activatedRoute.params.subscribe((params) => {
      codeReg = params.codeRegion;
      codeDpt = params.codeDpt;

      forkJoin([
        this.httpService.getRequest<Departement>(sprintf(UrlApi.urlDepartmentByCode, codeDpt)),
        this.httpService.getRequest<Commune[]>(sprintf(UrlApi.urlCommunesByDepartment, codeDpt)),
        this.httpService.getRequest<Region>(UrlApi.urlRegions + codeReg)
      ])
      .subscribe(
        (jsonObservable) => {
          this.department = jsonObservable[0];
          this.communes = jsonObservable[1];
          this.region = jsonObservable[2];
        }
      )
      this.httpService.getRequest<Region>(UrlApi.urlRegions + codeReg).subscribe((json) => {
        this.region = json;
      });
    });
  }

}
