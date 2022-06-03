import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGridComponent } from './user-grid/user-grid.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserGridComponent,
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class UserRoutingModule {}
