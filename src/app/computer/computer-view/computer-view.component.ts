import { Component, OnInit } from '@angular/core';
import {Computer} from '../computer';
import {ActivatedRoute, Router} from '@angular/router';
import {ComputerService} from '../computer.service';

@Component({
  selector: 'app-computer-view',
  templateUrl: './computer-view.component.html',
  styleUrls: ['./computer-view.component.css']
})
export class ComputerViewComponent {

  computer: Computer;
  id: string;

  constructor(private route: ActivatedRoute, private router: Router, private computerService: ComputerService) {
    this.id = route.snapshot.params.id;
    computerService.getComputerByIdOfAll(this.id).subscribe((res) => this.computer = res);
  }

  gotoOfficeList() {
    this.router.navigate(['/computers']);
  }

  returnToList() {

  }

}
