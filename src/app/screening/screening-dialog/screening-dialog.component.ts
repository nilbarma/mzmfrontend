import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'public-screening-dialog',
  templateUrl: './screening-dialog.component.html',
})
export class ScreeningDialogComponent {

  title: string;
  items: any = {
    movieId: '',
    auditoriumId: '',
    date: '',
    startTime: '',
    endTime: '',
    full: '',
    price: '',
  };

  constructor(
    private translocoService: TranslocoService,
    public dialogRef: MatDialogRef<ScreeningDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any,
  ) {
    if (!dialogData) {
      this.title = this.translocoService.translate(
        'bookingmanagementmanagement.addTitle',
      );
    } else {
      this.title = this.translocoService.translate(
        'bookingmanagementmanagement.editTitle',
      );
        this.items.movieId = dialogData.movieId;
        this.items.auditoriumId = dialogData.auditoriumId;
        this.items.date = dialogData.date;
        this.items.startTime = dialogData.startTime;
        this.items.endTime = dialogData.endTime;
        this.items.full = dialogData.full;
        this.items.price = dialogData.price;
      this.items.id = dialogData.id;
      this.items.modificationCounter = dialogData.modificationCounter;
    }
  }

  /* getTranslation(text: string): string {
    let value: string;
    this.translocoService.get(text).subscribe((res: any) => {
      value = res;
    });
    return value;
  } */
}
