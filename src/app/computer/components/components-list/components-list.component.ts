import { Component, OnInit } from '@angular/core';
import {Cpu} from '../cpu/cpu';
import {Ram} from '../ram/ram';
import {Rom} from '../rom/rom';
import {CpuService} from '../cpu/cpu.service';
import {RamService} from '../ram/ram.service';
import {RomService} from '../rom/rom.service';

@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.css']
})
export class ComponentsListComponent implements OnInit {

  private cpu: Cpu[];
  private ram: Ram[];
  private rom: Rom[];

  constructor(private cpuService: CpuService, private ramService: RamService, private romService: RomService) {}

  ngOnInit() {
    this.cpuService.findAll().subscribe(data => {
      this.cpu = data;
    });
    this.ramService.findAll().subscribe(data => {
      this.ram = data;
    });
    this.romService.findAll().subscribe(data => {
      this.rom = data;
    });
  }

}
