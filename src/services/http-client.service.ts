import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlApi} from "../url_api/url_api";
import {ISerializable} from "../models/steamish/interfaces/i-serializable";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getRequest<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  postRequest<T>(url: string, item: ISerializable): Observable<T> {
    return this.httpClient.post<T>(url, item.postSerializable(), UrlApi.jsonHeaders);
  }

  putRequest<T>(url: string, item: ISerializable): Observable<T> {
    return this.httpClient.put<T>(url, item.putSerializable(), UrlApi.jsonHeaders);
  }

}
