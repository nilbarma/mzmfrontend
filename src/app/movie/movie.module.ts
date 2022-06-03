import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MovieAlertComponent } from './movie-alert/movie-alert.component';
import { MovieDialogComponent } from './movie-dialog/movie-dialog.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  imports: [ CommonModule, CoreModule, MovieRoutingModule ],
  declarations: [
    MovieGridComponent,
    MovieDialogComponent,
    MovieAlertComponent,
  ],
  providers: [],
})
export class MovieModule { }
