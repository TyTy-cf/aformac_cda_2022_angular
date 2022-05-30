import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getRequest<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  postRequest<T>(url: string, item: T): Observable<T> {
    return this.httpClient.post<T>(url, item);
  }

}
