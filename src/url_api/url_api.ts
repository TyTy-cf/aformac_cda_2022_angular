
export class UrlApi {

  static rawUrlGeoApi: string = 'https://geo.api.gouv.fr';
  static urlRegions: string = UrlApi.rawUrlGeoApi + '/regions/';
  static urlDepartementsByRegion: string = UrlApi.rawUrlGeoApi + '/regions/%s/departements';

  // // sprintf(UrlApi.urlDepartementsByRegion, '84');

}
