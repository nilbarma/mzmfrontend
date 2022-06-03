import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieGridComponent } from './movie-grid/movie-grid.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MovieGridComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class MovieRoutingModule {}
