import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './store/dashboard/dashboard.component';
import { DataTableComponent } from './store/data-table/data-table.component';

const routes: Routes = [
  {
    path:'homePage', component: HomePageComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
     path: '', redirectTo: '/homePage', pathMatch: 'full' 
  },
  {
    path: "**", component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
