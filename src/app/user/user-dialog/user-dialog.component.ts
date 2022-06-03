import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'public-user-dialog',
  templateUrl: './user-dialog.component.html',
})
export class UserDialogComponent {

  title: string;
  items: any = {
    userName: '',
    password: '',
  };

  constructor(
    private translocoService: TranslocoService,
    public dialogRef: MatDialogRef<UserDialogComponent>,
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
        this.items.userName = dialogData.userName;
        this.items.password = dialogData.password;
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
