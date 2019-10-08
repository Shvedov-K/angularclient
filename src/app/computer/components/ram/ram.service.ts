import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ram} from './ram';

@Injectable({
  providedIn: 'root'
})
export class RamService {

  private ramUrl: string;

  constructor(private http: HttpClient) {
    this.ramUrl = 'http://localhost:8080/ram/';
  }

  public findAll(): Observable<Ram[]> {
    return this.http.get<Ram[]>(this.ramUrl);
  }
}
