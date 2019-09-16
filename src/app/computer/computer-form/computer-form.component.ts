import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Computer} from '../computer';
import {ComputerService} from '../computer.service';

@Component({
  selector: 'app-computer-form',
  templateUrl: './computer-form.component.html',
  styleUrls: ['./computer-form.component.css']
})
export class ComputerFormComponent  {

  computer: Computer;

  constructor(private route: ActivatedRoute, private router: Router, private computerService: ComputerService) {
    this.computer = new Computer();
  }

  onSubmit() {
    this.computerService.save(this.computer).subscribe(result => this.gotoOfficeList());
  }

  gotoOfficeList() {
    this.router.navigate(['/offices']);
  }

}
