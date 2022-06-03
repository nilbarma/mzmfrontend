import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SearchCriteria } from '../../core/interfaces/search-criteria';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlService: string = 
    environment.restServiceRoot + 'bookingmanagement/v1/user/';
  constructor(private http: HttpClient) {}
  getUser(
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
      userName: searchTerms.userName,
      password: searchTerms.password,
    };
    return this.http.post<any>(this.urlService + 'search', searchCriteria);
  }

  saveUser(data: any): Observable<Object> {
    const obj: any = {
      id: data.id,
      modificationCounter: data.modificationCounter,
      userName: data.userName,
      password: data.password,
    };
    return this.http.post(this.urlService, obj);
  }

  deleteUser(id: number): Observable<Object> {
    return this.http.delete(this.urlService + id);
  }

  searchUser(criteria: any): Observable<Object> {
    return this.http.post(this.urlService + 'search', {
      criteria: criteria,
    });
  }
}
