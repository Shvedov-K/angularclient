import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Computer} from './computer';
import {ComputerComponent} from './computerComponent';

@Injectable()
export class ComputerService {

  private computerUrl: string;

  constructor(private http: HttpClient) {
    this.computerUrl = 'http://localhost:8080/computer/';
  }

  public findAll(): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.computerUrl);
  }

  public findComputerById(id: string): Observable<Computer> {
    return this.http.get<Computer>(this.computerUrl + id);
  }

  public getComputerByIdOfAll(id: string): Observable<Computer> {
    return this.http.get<Computer>(this.computerUrl + id + '/getComputerByIdOfAll/');
  }

  public save(computer: ComputerComponent) {
    return this.http.post<ComputerComponent>(this.computerUrl, computer);
  }

  public update(computer: Computer, computerComponent: ComputerComponent) {
    return this.http.put<Computer>(this.computerUrl + computer.id + '/updateComputerById/', computerComponent);
  }

  public deleteComputer(computer) {
    return this.http.delete(this.computerUrl + computer.id);
  }
}
