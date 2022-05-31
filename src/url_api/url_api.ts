import {HttpHeaders} from "@angular/common/http";

export class UrlApi {

  static rawUrlGeoApi: string = 'https://geo.api.gouv.fr';
  static urlRegions: string = UrlApi.rawUrlGeoApi + '/regions/';
  static urlRegionsAll: string = UrlApi.rawUrlGeoApi + '/regions';
  static urlDepartmentsAll: string = UrlApi.rawUrlGeoApi + '/departements';
  static urlDepartmentByCode: string = UrlApi.rawUrlGeoApi + '/departements/%s';
  static urlDepartmentsByRegion: string = UrlApi.rawUrlGeoApi + '/regions/%s/departements';
  static urlCommunesByDepartment: string = UrlApi.rawUrlGeoApi + '/departements/%s/communes';

  static urlSteamish: string = 'https://steam-ish.test-02.drosalys.net/api';
  static urlGame: string = UrlApi.urlSteamish + '/game';
  static urlGameBySLug: string = UrlApi.urlSteamish + '/game/%s';
  static urlAccount: string = UrlApi.urlSteamish + '/account';
  static urlPublisher: string = UrlApi.urlSteamish + '/publisher';
  static urlGameAll: string = UrlApi.urlSteamish + '/game?limit=50';
  static urlGameFilter: string = UrlApi.urlSteamish + '/game?sort=game.%s&direction=%s&page=1&limit=%s';

  /** Headers */
  static jsonHeaders: {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '
    })
  };

  static getHeadersWithTokens(token: string): {headers: HttpHeaders} {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + token
      })
    };
  }

  // // sprintf(UrlApi.urlDepartementsByRegion, '84');

}
