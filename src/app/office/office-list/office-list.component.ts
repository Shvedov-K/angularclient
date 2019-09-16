import { Component, OnInit } from '@angular/core';
import {Office} from '../office';
import {OfficeService} from '../office.service';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit {

  offices: Office[];

  constructor(private officeService: OfficeService) {
  }

  ngOnInit() {
    this.officeService.findAll().subscribe(data => {
      this.offices = data;
    });
  }
  deleteOffice(office: Office): void {
    this.officeService.deleteOffice(office).subscribe(data => {
      this.offices = this.offices.filter(u => u !== office); });
  }
}
