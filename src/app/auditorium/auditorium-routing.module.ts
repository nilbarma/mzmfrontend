import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditoriumGridComponent } from './auditorium-grid/auditorium-grid.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuditoriumGridComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class AuditoriumRoutingModule {}
