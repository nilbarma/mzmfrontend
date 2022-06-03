import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SearchCriteria } from '../../core/interfaces/search-criteria';

@Injectable({
  providedIn: 'root',
})
export class SeatService {
  private urlService: string = 
    environment.restServiceRoot + 'bookingmanagement/v1/seat/';
  constructor(private http: HttpClient) {}
  getSeat(
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
      seatNumber: searchTerms.seatNumber,
      auditoriumId: searchTerms.auditoriumId,
    };
    return this.http.post<any>(this.urlService + 'search', searchCriteria);
  }

  saveSeat(data: any): Observable<Object> {
    const obj: any = {
      id: data.id,
      modificationCounter: data.modificationCounter,
      seatNumber: data.seatNumber,
      auditoriumId: data.auditoriumId,
    };
    return this.http.post(this.urlService, obj);
  }

  deleteSeat(id: number): Observable<Object> {
    return this.http.delete(this.urlService + id);
  }

  searchSeat(criteria: any): Observable<Object> {
    return this.http.post(this.urlService + 'search', {
      criteria: criteria,
    });
  }
}
