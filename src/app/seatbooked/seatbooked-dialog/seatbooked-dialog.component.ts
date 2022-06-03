import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'public-seatbooked-dialog',
  templateUrl: './seatbooked-dialog.component.html',
})
export class SeatBookedDialogComponent {

  title: string;
  items: any = {
    seatId: '',
    bookingId: '',
    screeningId: '',
  };

  constructor(
    private translocoService: TranslocoService,
    public dialogRef: MatDialogRef<SeatBookedDialogComponent>,
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
        this.items.seatId = dialogData.seatId;
        this.items.bookingId = dialogData.bookingId;
        this.items.screeningId = dialogData.screeningId;
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
