import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AffiliatesComponent } from './affiliates/affiliates.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
//   {
//     path: '',
//     component: SidebarComponent,
//  },
  {
    path: '',
    component: HomeComponent,
 },
 {
  path: 'home',
  component: HomeComponent,
},
 {
  path: 'reports',
  component: ReportsComponent,
},
{
  path: 'statistics',
  component: StatisticsComponent,
},
{
  path: 'affiliates',
  component: AffiliatesComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
