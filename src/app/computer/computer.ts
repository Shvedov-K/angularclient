import {Cpu} from './components/cpu/cpu';
import {Ram} from './components/ram/ram';
import {Rom} from './components/rom/rom';

export class Computer {
  id: string;
  ram: Ram;
  cpu: Cpu;
  rom: Rom;
}
