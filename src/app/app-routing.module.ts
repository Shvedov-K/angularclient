import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OfficeListComponent} from './office/office-list/office-list.component';
import {OfficeFormComponent} from './office/office-form/office-form.component';
import {EditOfficeFormComponent} from './office/editoffice-form/editoffice-form.component';
import {EditcomputerFormComponent} from './computer/editcomputer-form/editcomputer-form.component';
import {ComputerFormComponent} from './computer/computer-form/computer-form.component';
import {ComputerListComponent} from './computer/computer-list/computer-list.component';
import {ComponentsListComponent} from './computer/components/components-list/components-list.component';
import {ComputerViewComponent} from './computer/computer-view/computer-view.component';


const routes: Routes = [
  {path: 'offices', component: OfficeListComponent},
  {path: 'computers', component: ComputerListComponent},
  {path: 'components', component: ComponentsListComponent},
  {path: 'addoffice', component: OfficeFormComponent},
  {path: 'addcomputer', component: ComputerFormComponent},
  {path: 'editoffice/:id', component: EditOfficeFormComponent},
  {path: 'editcomputer/:id', component: EditcomputerFormComponent},
  {path: 'viewcomputer/:id', component: ComputerViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
