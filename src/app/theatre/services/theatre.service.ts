import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SearchCriteria } from '../../core/interfaces/search-criteria';

@Injectable({
  providedIn: 'root',
})
export class TheatreService {
  private urlService: string = 
    environment.restServiceRoot + 'bookingmanagement/v1/theatre/';
  constructor(private http: HttpClient) {}
  getTheatre(
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
      name: searchTerms.name,
    };
    return this.http.post<any>(this.urlService + 'search', searchCriteria);
  }

  saveTheatre(data: any): Observable<Object> {
    const obj: any = {
      id: data.id,
      modificationCounter: data.modificationCounter,
      name: data.name,
    };
    return this.http.post(this.urlService, obj);
  }

  deleteTheatre(id: number): Observable<Object> {
    return this.http.delete(this.urlService + id);
  }

  searchTheatre(criteria: any): Observable<Object> {
    return this.http.post(this.urlService + 'search', {
      criteria: criteria,
    });
  }
}
