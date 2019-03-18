import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CommunicationsComponent } from './features/communications/communications/communications.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'communications',
  component: CommunicationsComponent
},
{
  path: '**',
  redirectTo: 'dashboard'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
