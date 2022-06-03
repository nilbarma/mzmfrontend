import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'public-booking-dialog',
  templateUrl: './booking-dialog.component.html',
})
export class BookingDialogComponent {

  title: string;
  items: any = {
    screeningId: '',
    userId: '',
    bookingTime: '',
    booked: '',
    active: '',
  };

  constructor(
    private translocoService: TranslocoService,
    public dialogRef: MatDialogRef<BookingDialogComponent>,
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
        this.items.screeningId = dialogData.screeningId;
        this.items.userId = dialogData.userId;
        this.items.bookingTime = dialogData.bookingTime;
        this.items.booked = dialogData.booked;
        this.items.active = dialogData.active;
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
