import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Computer} from '../computer';
import {ComputerService} from '../computer.service';
import {ComputerComponent} from '../computerComponent';

@Component({
  selector: 'app-editcomputer-form',
  templateUrl: './editcomputer-form.component.html',
  styleUrls: ['./editcomputer-form.component.css']
})
export class EditcomputerFormComponent {

  computer: Computer;
  computerComponent: ComputerComponent;
  id: string;

  constructor(private route: ActivatedRoute, private router: Router, private computerService: ComputerService) {
    this.id = route.snapshot.params.id;
    computerService.findComputerById(this.id).subscribe((res) => this.computer = res);
    this.computerComponent = new ComputerComponent();
    computerService.findComputerById(this.id).subscribe((res) => this.computerComponent.cpuId = res.cpu.id);
    computerService.findComputerById(this.id).subscribe((res) => this.computerComponent.ramId = res.ram.id);
    computerService.findComputerById(this.id).subscribe((res) => this.computerComponent.romId = res.rom.id);
  }

  onSubmit() {
    this.computer.id = this.id;
    this.computerService.update(this.computer, this.computerComponent).subscribe(result => this.gotoOfficeList());
  }

  gotoOfficeList() {
    this.router.navigate(['/computers']);
  }

}
