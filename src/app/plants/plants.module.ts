import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsListComponent } from './plants-list/plants-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[PlantsListComponent],
  declarations: [PlantsListComponent]
})
export class PlantsModule { }
