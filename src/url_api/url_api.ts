
export class UrlApi {

  static rawUrlGeoApi: string = 'https://geo.api.gouv.fr';
  static urlRegions: string = UrlApi.rawUrlGeoApi + '/regions/';
  static urlRegionsAll: string = UrlApi.rawUrlGeoApi + '/regions';
  static urlDepartmentsAll: string = UrlApi.rawUrlGeoApi + '/departements';
  static urlDepartmentByCode: string = UrlApi.rawUrlGeoApi + '/departements/%s';
  static urlDepartmentsByRegion: string = UrlApi.rawUrlGeoApi + '/regions/%s/departements';
  static urlCommunesByDepartment: string = UrlApi.rawUrlGeoApi + '/departements/%s/communes';

  // // sprintf(UrlApi.urlDepartementsByRegion, '84');

}
