import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SearchCriteria } from '../../core/interfaces/search-criteria';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private urlService: string = 
    environment.restServiceRoot + 'bookingmanagement/v1/movie/';
  constructor(private http: HttpClient) {}
  getMovie(
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
      title: searchTerms.title,
      poster: searchTerms.poster,
      genre: searchTerms.genre,
      duration: searchTerms.duration,
    };
    return this.http.post<any>(this.urlService + 'search', searchCriteria);
  }

  saveMovie(data: any): Observable<Object> {
    const obj: any = {
      id: data.id,
      modificationCounter: data.modificationCounter,
      title: data.title,
      poster: data.poster,
      genre: data.genre,
      duration: data.duration,
    };
    return this.http.post(this.urlService, obj);
  }

  deleteMovie(id: number): Observable<Object> {
    return this.http.delete(this.urlService + id);
  }

  searchMovie(criteria: any): Observable<Object> {
    return this.http.post(this.urlService + 'search', {
      criteria: criteria,
    });
  }
}
