import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { ScreeningAlertComponent } from './screening-alert/screening-alert.component';
import { ScreeningDialogComponent } from './screening-dialog/screening-dialog.component';
import { ScreeningGridComponent } from './screening-grid/screening-grid.component';
import { ScreeningRoutingModule } from './screening-routing.module';

@NgModule({
  imports: [ CommonModule, CoreModule, ScreeningRoutingModule ],
  declarations: [
    ScreeningGridComponent,
    ScreeningDialogComponent,
    ScreeningAlertComponent,
  ],
  providers: [],
})
export class ScreeningModule { }
