import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'public-seat-dialog',
  templateUrl: './seat-dialog.component.html',
})
export class SeatDialogComponent {

  title: string;
  items: any = {
    seatNumber: '',
    auditoriumId: '',
  };

  constructor(
    private translocoService: TranslocoService,
    public dialogRef: MatDialogRef<SeatDialogComponent>,
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
        this.items.seatNumber = dialogData.seatNumber;
        this.items.auditoriumId = dialogData.auditoriumId;
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
