import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IApiResponse} from "../../models/steamish/i-api-response";
import {ISerializable} from "../../models/steamish/interfaces/i-serializable";

@Component({
  selector: 'app-api-paginator',
  templateUrl: './api-paginator.component.html',
  styleUrls: ['./api-paginator.component.scss']
})
export class ApiPaginatorComponent {

  @Input()
  apiResponse: IApiResponse<ISerializable>|undefined;

  @Output()
  numberPage: EventEmitter<number> = new EventEmitter<number>();

  changePage(number: number) {
    this.numberPage.emit(number);
  }

}
