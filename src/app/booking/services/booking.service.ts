import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SearchCriteria } from '../../core/interfaces/search-criteria';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private urlService: string = 
    environment.restServiceRoot + 'bookingmanagement/v1/booking/';
  constructor(private http: HttpClient) {}
  getBooking(
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
      screeningId: searchTerms.screeningId,
      userId: searchTerms.userId,
      bookingTime: searchTerms.bookingTime,
      booked: searchTerms.booked,
      active: searchTerms.active,
    };
    return this.http.post<any>(this.urlService + 'search', searchCriteria);
  }

  saveBooking(data: any): Observable<Object> {
    const obj: any = {
      id: data.id,
      modificationCounter: data.modificationCounter,
      screeningId: data.screeningId,
      userId: data.userId,
      bookingTime: data.bookingTime,
      booked: data.booked,
      active: data.active,
    };
    return this.http.post(this.urlService, obj);
  }

  deleteBooking(id: number): Observable<Object> {
    return this.http.delete(this.urlService + id);
  }

  searchBooking(criteria: any): Observable<Object> {
    return this.http.post(this.urlService + 'search', {
      criteria: criteria,
    });
  }
}
