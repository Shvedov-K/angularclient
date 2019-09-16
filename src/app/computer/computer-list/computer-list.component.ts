import { Component, OnInit } from '@angular/core';
import {Computer} from '../computer';
import {ComputerService} from '../computer.service';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.css']
})
export class ComputerListComponent implements OnInit {

  computers: Computer[];

  constructor(private computerService: ComputerService) {
  }

  ngOnInit() {
    this.computerService.findAll().subscribe(data => {
      this.computers = data;
    });
  }
  deleteComputer(computer: Computer): void {
    this.computerService.deleteComputer(computer).subscribe(data => {
      this.computers = this.computers.filter(u => u !== computer); });
  }

}
