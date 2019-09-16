import { Component, OnInit } from '@angular/core';
import {Office} from '../office';
import {OfficeService} from '../office.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-office-form',
  templateUrl: './office-form.component.html',
  styleUrls: ['./office-form.component.css']
})
export class OfficeFormComponent {

  office: Office;

  constructor(private route: ActivatedRoute, private router: Router, private userService: OfficeService) {
    this.office = new Office();
  }

  onSubmit() {
    this.userService.save(this.office).subscribe(result => this.gotoOfficeList());
  }

  gotoOfficeList() {
    this.router.navigate(['/offices']);
  }

}
