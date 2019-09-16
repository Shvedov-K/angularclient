import { Component, OnInit } from '@angular/core';
import {Office} from '../office';
import {ActivatedRoute, Router} from '@angular/router';
import {OfficeService} from '../office.service';

@Component({
  selector: 'app-editoffice-form',
  templateUrl: './editoffice-form.component.html',
  styleUrls: ['./editoffice-form.component.css']
})
export class EditOfficeFormComponent {


  office: Office;
  id: string;

  constructor(private route: ActivatedRoute, private router: Router, private officeService: OfficeService) {
    this.id = route.snapshot.params.id;
    officeService.findOfficeById(this.id).subscribe((res) => this.office = res);
  }

  onSubmit() {
    this.office.id = this.id;
    this.officeService.update(this.office).subscribe(result => this.gotoOfficeList());
  }

  gotoOfficeList() {
    this.router.navigate(['/offices']);
  }

}
