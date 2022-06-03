import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SearchCriteria } from '../../core/interfaces/search-criteria';

@Injectable({
  providedIn: 'root',
})
export class ScreeningService {
  private urlService: string = 
    environment.restServiceRoot + 'bookingmanagement/v1/screening/';
  constructor(private http: HttpClient) {}
  getScreening(
    size: number,
    page: number,
    searchTerms: any,
    sort: any[],
  ): Observable<any> {
    const searchCriteria: SearchCriteria = {
      pageable: {
        pageSize: size,
        pageNumber: page,
        sort: sort,
      },
      movieId: searchTerms.movieId,
      auditoriumId: searchTerms.auditoriumId,
      date: searchTerms.date,
      startTime: searchTerms.startTime,
      endTime: searchTerms.endTime,
      full: searchTerms.full,
      price: searchTerms.price,
    };
    return this.http.post<any>(this.urlService + 'search', searchCriteria);
  }

  saveScreening(data: any): Observable<Object> {
    const obj: any = {
      id: data.id,
      modificationCounter: data.modificationCounter,
      movieId: data.movieId,
      auditoriumId: data.auditoriumId,
      date: data.date,
      startTime: data.startTime,
      endTime: data.endTime,
      full: data.full,
      price: data.price,
    };
    return this.http.post(this.urlService, obj);
  }

  deleteScreening(id: number): Observable<Object> {
    return this.http.delete(this.urlService + id);
  }

  searchScreening(criteria: any): Observable<Object> {
    return this.http.post(this.urlService + 'search', {
      criteria: criteria,
    });
  }
}
