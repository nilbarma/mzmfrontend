import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TranslocoService, AvailableLangs } from '@ngneat/transloco';
import { Pageable } from '../../core/interfaces/pageable';
import { AuthService } from '../../core/security/auth.service';
import { MovieAlertComponent } from '../movie-alert/movie-alert.component';
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'public-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss'],
})
export class MovieGridComponent implements OnInit {
  currentLanguage: string;
  langs: AvailableLangs;
  private pageable: Pageable = {
      pageSize: 8,
      pageNumber: 0,
  };
  private sorting: any[] = [];

  @ViewChild('pagingBar', { static: true })
  pagingBar: MatPaginator;

  data: any = [];
  columns: any[] = [
    {
      name: 'title',
      label: 'bookingmanagement.Movie.columns.title',
    },
    {
      name: 'poster',
      label: 'bookingmanagement.Movie.columns.poster',
    },
    {
      name: 'genre',
      label: 'bookingmanagement.Movie.columns.genre',
    },
    {
      name: 'duration',
      label: 'bookingmanagement.Movie.columns.duration',
    },
  ];
  displayedColumns: string[] = [
    'select',
      'title',
      'poster',
      'genre',
      'duration',
    ];
  pageSize = 8;
  pageSizes: number[] = [8, 16, 24];
  selectedRow: any;

  dialogRef: MatDialogRef<MovieDialogComponent>;
  totalItems: number;
  searchTerms: any = {
    title: undefined,
    poster: undefined,
    genre: undefined,
    duration: undefined,
  };
  selection: SelectionModel<any> = new SelectionModel<any>(false, []);
  constructor(
    private translocoService: TranslocoService,
    public dialog: MatDialog,
    public authService: AuthService,
    public router: Router,
    private dataGridService: MovieService,
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    this.dataGridService
      .getMovie(
        this.pageable.pageSize,
        this.pageable.pageNumber,
        this.searchTerms,
        (this.pageable.sort = this.sorting),
      )
      .subscribe(
        (res: any) => {
          this.data = res.content;
          this.totalItems = res.totalElements;
        },
        (error: any) => {
          setTimeout(() => {
            this.dialog.open(MovieAlertComponent, {
              width: '400px',
              data: {
                confirmDialog: false,
                message: this.translocoService.translate(error.message),
                title: this.translocoService.translate('ERROR'),
                cancelButton: this.translocoService.translate('CLOSE'),
              },
            });
          });
        },
      );
  }

  page(pagingEvent: PageEvent): void {
    this.pageable = {
        pageSize: pagingEvent.pageSize,
        pageNumber: pagingEvent.pageIndex,
        sort: this.pageable.sort,
    };
    this.getMovie();
  }
  sort(sortEvent: Sort): void {
    this.sorting = [];
    if (sortEvent.direction) {
      this.sorting.push({
       property: sortEvent.active.split('.').pop(),
       direction: '' + sortEvent.direction,
      });
    }
    this.getMovie();
  }
  checkboxLabel(row?: any): string {
    return `${
      this.selection.isSelected(row) ? 'deselect' : 'select'
    } row ${row.position + 1}`;
  }
  openDialog(): void {
    this.dialogRef = this.dialog.open(MovieDialogComponent);

    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataGridService.saveMovie(result).subscribe(
          () => {
            this.getMovie();
          },
          (error: any) => {
            this.dialog.open(MovieAlertComponent, {
              width: '400px',
              data: {
                confirmDialog: false,
                  message: this.translocoService.translate(error.message),
                  title: this.translocoService.translate(
                    'bookingmanagement.alert.title',
                  ),
                  cancelButton: this.translocoService.translate('CLOSE'),
                },
              })
              .afterClosed()
              .subscribe((accept: boolean) => {
                if (accept) {
                  this.authService.setLogged(false);
                  this.router.navigate(['/login']);
                }
              });
          },
        );
      }
    });
  }
  selectEvent(row: any): void {
    this.selection.toggle(row);
    this.selection.isSelected(row)
      ? (this.selectedRow = row)
      : (this.selectedRow = undefined);
  }
  openEditDialog(): void {
    this.dialogRef = this.dialog.open(MovieDialogComponent, {
      data: this.selectedRow,
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataGridService.saveMovie(result).subscribe(
          () => {
            this.getMovie();
            this.selectedRow = undefined;
          },
          (error: any) => {
            this.dialog.open(MovieAlertComponent, {
                width: '400px',
                data: {
                  confirmDialog: false,
                  message: this.translocoService.translate(error.message),
                  title: this.translocoService.translate(
                    'bookingmanagement.alert.title',
                  ),
                  cancelButton: this.translocoService.translate('CLOSE'),
                },
              })
              .afterClosed()
              .subscribe((accept: boolean) => {
                if (accept) {
                  this.authService.setLogged(false);
                  this.router.navigate(['/login']);
                }
              });
          },
        );
      }
    });
  }
  openConfirm(): void {
    this.dialog
      .open(MovieAlertComponent, {
      width: '400px',
      data: {
        confirmDialog: true,
          message: this.translocoService.translate(
            'bookingmanagementmanagement.alert.message',
          ),
          title: this.translocoService.translate(
            'bookingmanagementmanagement.alert.title',
          ),
          cancelButton: this.translocoService.translate(
            'bookingmanagementmanagement.alert.cancelBtn',
          ),
          acceptButton: this.translocoService.translate(
            'bookingmanagementmanagement.alert.acceptBtn',
          ),
      },
    })
    .afterClosed()
    .subscribe((accept: boolean) => {
      if (accept) {
          this.dataGridService.deleteMovie(this.selectedRow.id).subscribe(
          () => {
            this.getMovie();
            this.selectedRow = undefined;
          },
          (error: any) => {
            this.dialog.open(MovieAlertComponent, {
              width: '400px',
              data: {
                confirmDialog: false,
                    message: this.translocoService.translate(error.message),
                    title: this.translocoService.translate(
                      'bookingmanagementmanagement.alert.title',
                    ),
                    cancelButton: this.translocoService.translate('CLOSE'),
                  },
                })
                .afterClosed()
                .subscribe((acceptance: boolean) => {
                  if (acceptance) {
                    this.authService.setLogged(false);
                    this.router.navigate(['/login']);
                  }
                });
            },
          );
        }
      });
  }

  filter(): void {
    this.getMovie();
    this.pagingBar.firstPage();
  }

  searchReset(form: any): void {
    form.reset();
    this.getMovie();
  }
}
