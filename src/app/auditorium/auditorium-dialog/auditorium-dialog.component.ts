import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'public-auditorium-dialog',
  templateUrl: './auditorium-dialog.component.html',
})
export class AuditoriumDialogComponent {

  title: string;
  items: any = {
    seatCount: '',
    theatreId: '',
  };

  constructor(
    private translocoService: TranslocoService,
    public dialogRef: MatDialogRef<AuditoriumDialogComponent>,
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
        this.items.seatCount = dialogData.seatCount;
        this.items.theatreId = dialogData.theatreId;
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
