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
    this.computerComponent.cpuId = '5d98fc6985d2e82a109164ea';
    this.computerComponent.ramId = '5d98fe8a85d2e82a109164eb';
    this.computerComponent.romId = '5d99003785d2e82a109164ee';
  }

  onSubmit() {
    this.computerService.save(this.computerComponent).subscribe(result => this.gotoComputerList());
  }

  gotoComputerList() {
    this.router.navigate(['/computers']);
  }

}
