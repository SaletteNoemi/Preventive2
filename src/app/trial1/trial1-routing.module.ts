import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Trial1ListComponent } from './trial1-list/trial1-list.component';
import { Trial1CreateComponent } from './trial1-create/trial1-create.component';
import { Trial1EditComponent } from './trial1-edit/trial1-edit.component';
import { Trial1DetailsComponent } from './trial1-details/trial1-details.component';

const routes: Routes = [
  { path:'trial1', component: Trial1ListComponent },
  { path: 'trial1Create', component: Trial1CreateComponent },
  { path: 'trialEdit/:id', component: Trial1EditComponent },
  { path: 'trial1Details', component: Trial1DetailsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Trial1RoutingModule { }
