import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficeListComponent } from './office/office-list/office-list.component';
import { OfficeFormComponent } from './office/office-form/office-form.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {OfficeService} from './office/office.service';
import { EditOfficeFormComponent } from './office/editoffice-form/editoffice-form.component';
import { ComputerListComponent } from './computer/computer-list/computer-list.component';
import { ComputerFormComponent } from './computer/computer-form/computer-form.component';
import { EditcomputerFormComponent } from './computer/editcomputer-form/editcomputer-form.component';
import {ComputerService} from './computer/computer.service';
import {CpuService} from './computer/components/cpu/cpu.service';
import {RamService} from './computer/components/ram/ram.service';
import {RomService} from './computer/components/rom/rom.service';
import {ComponentsListComponent} from './computer/components/components-list/components-list.component';


@NgModule({
  declarations: [
    AppComponent,
    OfficeListComponent,
    OfficeFormComponent,
    EditOfficeFormComponent,
    ComputerListComponent,
    ComputerFormComponent,
    EditcomputerFormComponent,
    ComponentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [OfficeService, ComputerService, CpuService, RamService, RomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
