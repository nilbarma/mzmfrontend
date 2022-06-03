import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { AuditoriumAlertComponent } from './auditorium-alert/auditorium-alert.component';
import { AuditoriumDialogComponent } from './auditorium-dialog/auditorium-dialog.component';
import { AuditoriumGridComponent } from './auditorium-grid/auditorium-grid.component';
import { AuditoriumRoutingModule } from './auditorium-routing.module';

@NgModule({
  imports: [ CommonModule, CoreModule, AuditoriumRoutingModule ],
  declarations: [
    AuditoriumGridComponent,
    AuditoriumDialogComponent,
    AuditoriumAlertComponent,
  ],
  providers: [],
})
export class AuditoriumModule { }
