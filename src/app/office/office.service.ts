import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Office} from './office';
import { Observable } from 'rxjs';
import {take} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';

@Injectable()
export class OfficeService {

  private officesUrl: string;

  constructor(private http: HttpClient) {
    this.officesUrl = 'http://127.0.0.1:8080/office/';
  }

  public findAll(): Observable<Office[]> {
    return this.http.get<Office[]>(this.officesUrl);
  }

  public findOfficeById(id: string): Observable<Office> {
    return this.http.get<Office>(this.officesUrl + id);
  }

  public addComputerToOfficeById(id: string, office: Office): Observable<Office> {
    const req = this.http.put<Office>(this.officesUrl + office.id + '/addComputerToOfficeById/', id);
    req.pipe(take(1))
      .subscribe( response => {
        return of(response);
      });
    return of(null);
  }

  public removeComputerFromOfficeById(id: string, office: Office): Observable<Office> {
    const req = this.http.put<Office>(this.officesUrl + office.id + '/removeComputerFromOfficeById/', id);
    req.subscribe();
    return null; // req.pipe();
  }

  public save(office: Office) {
    return this.http.post<Office>(this.officesUrl, office);
  }

  public update(office: Office) {
    return this.http.put<Office>(this.officesUrl + office.id + '/updateOfficeById/', office);
  }

  public deleteOffice(office) {
    return this.http.delete(this.officesUrl + '/' + office.id);
  }


}
