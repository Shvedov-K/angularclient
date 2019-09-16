import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Computer} from '../computer';
import {ComputerService} from '../computer.service';

@Component({
  selector: 'app-editcomputer-form',
  templateUrl: './editcomputer-form.component.html',
  styleUrls: ['./editcomputer-form.component.css']
})
export class EditcomputerFormComponent {

  computer: Computer;
  id: string;

  constructor(private route: ActivatedRoute, private router: Router, private computerService: ComputerService) {
    this.id = route.snapshot.params.id;
    computerService.findComputerById(this.id).subscribe((res) => this.computer = res);
  }

  onSubmit() {
    this.computer.id = this.id;
    this.computerService.update(this.computer).subscribe(result => this.gotoOfficeList());
  }

  gotoOfficeList() {
    this.router.navigate(['/computers']);
  }

}
