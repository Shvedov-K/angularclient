import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cpu} from './cpu';

@Injectable({
  providedIn: 'root'
})
export class CpuService {

  private cpuUrl: string;

  constructor(private http: HttpClient) {
    this.cpuUrl = 'http://localhost:8080/cpu/';
  }

  public findAll(): Observable<Cpu[]> {
    return this.http.get<Cpu[]>(this.cpuUrl);
  }
}
