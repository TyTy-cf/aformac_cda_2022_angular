import {Component, Input} from '@angular/core';
import {Region} from "../../models/geo-gouv/region";
import {Departement} from "../../models/geo-gouv/departement";

@Component({
  selector: 'app-bread-crumbs-geo-api',
  templateUrl: './bread-crumbs-geo-api.component.html',
  styleUrls: ['./bread-crumbs-geo-api.component.scss']
})
export class BreadCrumbsGeoApiComponent {

  @Input()
  region: Region|undefined;

  @Input()
  department: Departement|undefined;

}
