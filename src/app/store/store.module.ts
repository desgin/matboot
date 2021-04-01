import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DataTableComponent } from './data-table/data-table.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const storeRoutes: Routes = [{
  path: 'dataTable', component: DataTableComponent
}];

@NgModule({
  declarations: [DashboardComponent, DataTableComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    MatTabsModule, 
    RouterModule.forChild(storeRoutes)
  ]
})
export class StoreModule { }
