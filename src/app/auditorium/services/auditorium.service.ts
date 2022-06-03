import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SearchCriteria } from '../../core/interfaces/search-criteria';

@Injectable({
  providedIn: 'root',
})
export class AuditoriumService {
  private urlService: string = 
    environment.restServiceRoot + 'bookingmanagement/v1/auditorium/';
  constructor(private http: HttpClient) {}
  getAuditorium(
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
      seatCount: searchTerms.seatCount,
      theatreId: searchTerms.theatreId,
    };
    return this.http.post<any>(this.urlService + 'search', searchCriteria);
  }

  saveAuditorium(data: any): Observable<Object> {
    const obj: any = {
      id: data.id,
      modificationCounter: data.modificationCounter,
      seatCount: data.seatCount,
      theatreId: data.theatreId,
    };
    return this.http.post(this.urlService, obj);
  }

  deleteAuditorium(id: number): Observable<Object> {
    return this.http.delete(this.urlService + id);
  }

  searchAuditorium(criteria: any): Observable<Object> {
    return this.http.post(this.urlService + 'search', {
      criteria: criteria,
    });
  }
}
