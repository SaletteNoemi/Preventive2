import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trial1CreateComponent } from './trial1-create/trial1-create.component';
import { Trial1ListComponent } from './trial1-list/trial1-list.component';
import { Trial1DetailsComponent } from './trial1-details/trial1-details.component';
import { Trial1EditComponent } from './trial1-edit/trial1-edit.component';
import { Trial1RoutingModule } from './trial1-routing.module';



@NgModule({
  declarations: [
    Trial1CreateComponent,
    Trial1ListComponent,
    Trial1DetailsComponent,
    Trial1EditComponent
  ],
  imports: [
    CommonModule,
    Trial1RoutingModule
  ]
})
export class Trial1Module { }
