import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rom} from './rom';

@Injectable({
  providedIn: 'root'
})
export class RomService {

  private romUrl: string;

  constructor(private http: HttpClient) {
    this.romUrl = 'http://localhost:8080/rom/';
  }

  public findAll(): Observable<Rom[]> {
    return this.http.get<Rom[]>(this.romUrl);
  }
}
