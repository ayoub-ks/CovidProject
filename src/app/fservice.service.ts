import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FserviceService {
  constructor(private http: HttpClient) {}
  getCoronaRealTimeData(country): Observable<any> {
    const url = 'https://api.covid19api.com/total/dayone/country/' + country;
    return this.http.get<any>(url);
  }
  getCoronaSummary(): Observable<any> {
    const url = 'https://api.covid19api.com/summary';
    return this.http.get<any>(url);
  }
}
