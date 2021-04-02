import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeriodicElement } from '../interface/periodicElement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getPerodicTable(): Observable<PeriodicElement[]> {
    const _url: string ="/assets/data/periodic-table.json";
    return this.http.get<PeriodicElement[]>(_url);
  }
}
