import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatreGridComponent } from './theatre-grid/theatre-grid.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TheatreGridComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class TheatreRoutingModule {}
