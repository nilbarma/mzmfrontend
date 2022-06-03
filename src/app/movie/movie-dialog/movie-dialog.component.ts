import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'public-movie-dialog',
  templateUrl: './movie-dialog.component.html',
})
export class MovieDialogComponent {

  title: string;
  items: any = {
    title: '',
    poster: '',
    genre: '',
    duration: '',
  };

  constructor(
    private translocoService: TranslocoService,
    public dialogRef: MatDialogRef<MovieDialogComponent>,
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
        this.items.title = dialogData.title;
        this.items.poster = dialogData.poster;
        this.items.genre = dialogData.genre;
        this.items.duration = dialogData.duration;
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
