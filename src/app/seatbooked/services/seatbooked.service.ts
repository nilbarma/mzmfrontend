import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SearchCriteria } from '../../core/interfaces/search-criteria';

@Injectable({
  providedIn: 'root',
})
export class SeatBookedService {
  private urlService: string = 
    environment.restServiceRoot + 'bookingmanagement/v1/seatbooked/';
  constructor(private http: HttpClient) {}
  getSeatBooked(
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
      seatId: searchTerms.seatId,
      bookingId: searchTerms.bookingId,
      screeningId: searchTerms.screeningId,
    };
    return this.http.post<any>(this.urlService + 'search', searchCriteria);
  }

  saveSeatBooked(data: any): Observable<Object> {
    const obj: any = {
      id: data.id,
      modificationCounter: data.modificationCounter,
      seatId: data.seatId,
      bookingId: data.bookingId,
      screeningId: data.screeningId,
    };
    return this.http.post(this.urlService, obj);
  }

  deleteSeatBooked(id: number): Observable<Object> {
    return this.http.delete(this.urlService + id);
  }

  searchSeatBooked(criteria: any): Observable<Object> {
    return this.http.post(this.urlService + 'search', {
      criteria: criteria,
    });
  }
}
