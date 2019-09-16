import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Computer} from './computer';

@Injectable()
export class ComputerService {

  private computerUrl: string;

  constructor(private http: HttpClient) {
    this.computerUrl = 'http://localhost:8088/computer/';
  }

  public findAll(): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.computerUrl);
  }

  public findComputerById(id: string): Observable<Computer> {
    return this.http.get<Computer>(this.computerUrl + id);
  }

  public save(computer: Computer) {
    return this.http.post<Computer>(this.computerUrl, computer);
  }

  public update(computer: Computer) {
    return this.http.put<Computer>(this.computerUrl + computer.id + '/updateComputerById/', computer);
  }

  public deleteComputer(computer) {
    return this.http.delete(this.computerUrl + '/' + computer.id);
  }
}
