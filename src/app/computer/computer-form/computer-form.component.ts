import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Computer} from '../computer';
import {ComputerService} from '../computer.service';
import {ComputerComponent} from '../computerComponent';

@Component({
  selector: 'app-computer-form',
  templateUrl: './computer-form.component.html',
  styleUrls: ['./computer-form.component.css']
})
export class ComputerFormComponent  {

  computer: Computer;
  computerComponent: ComputerComponent;

  constructor(private route: ActivatedRoute, private router: Router, private computerService: ComputerService) {
    this.computer = new Computer();
    this.computerComponent = new ComputerComponent();
  }

  onSubmit() {
    this.computerService.save(this.computerComponent).subscribe(result => this.gotoOfficeList());
  }

  gotoOfficeList() {
    this.router.navigate(['/offices']);
  }

}
