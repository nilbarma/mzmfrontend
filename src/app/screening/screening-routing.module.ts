import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreeningGridComponent } from './screening-grid/screening-grid.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ScreeningGridComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ScreeningRoutingModule {}
