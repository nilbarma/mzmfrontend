import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatGridComponent } from './seat-grid/seat-grid.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SeatGridComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class SeatRoutingModule {}
