import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { TheatreAlertComponent } from './theatre-alert/theatre-alert.component';
import { TheatreDialogComponent } from './theatre-dialog/theatre-dialog.component';
import { TheatreGridComponent } from './theatre-grid/theatre-grid.component';
import { TheatreRoutingModule } from './theatre-routing.module';

@NgModule({
  imports: [ CommonModule, CoreModule, TheatreRoutingModule ],
  declarations: [
    TheatreGridComponent,
    TheatreDialogComponent,
    TheatreAlertComponent,
  ],
  providers: [],
})
export class TheatreModule { }
