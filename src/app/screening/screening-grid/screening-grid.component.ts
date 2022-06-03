import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TranslocoService, AvailableLangs } from '@ngneat/transloco';
import { Pageable } from '../../core/interfaces/pageable';
import { AuthService } from '../../core/security/auth.service';
import { ScreeningAlertComponent } from '../screening-alert/screening-alert.component';
import { ScreeningDialogComponent } from '../screening-dialog/screening-dialog.component';
import { ScreeningService } from '../services/screening.service';

@Component({
  selector: 'public-screening-grid',
  templateUrl: './screening-grid.component.html',
  styleUrls: ['./screening-grid.component.scss'],
})
export class ScreeningGridComponent implements OnInit {
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
      name: 'movieId',
      label: 'bookingmanagement.Screening.columns.movieId',
    },
    {
      name: 'auditoriumId',
      label: 'bookingmanagement.Screening.columns.auditoriumId',
    },
    {
      name: 'date',
      label: 'bookingmanagement.Screening.columns.date',
    },
    {
      name: 'startTime',
      label: 'bookingmanagement.Screening.columns.startTime',
    },
    {
      name: 'endTime',
      label: 'bookingmanagement.Screening.columns.endTime',
    },
    {
      name: 'full',
      label: 'bookingmanagement.Screening.columns.full',
    },
    {
      name: 'price',
      label: 'bookingmanagement.Screening.columns.price',
    },
  ];
  displayedColumns: string[] = [
    'select',
      'movieId',
      'auditoriumId',
      'date',
      'startTime',
      'endTime',
      'full',
      'price',
    ];
  pageSize = 8;
  pageSizes: number[] = [8, 16, 24];
  selectedRow: any;

  dialogRef: MatDialogRef<ScreeningDialogComponent>;
  totalItems: number;
  searchTerms: any = {
    movieId: undefined,
    auditoriumId: undefined,
    date: undefined,
    startTime: undefined,
    endTime: undefined,
    full: undefined,
    price: undefined,
  };
  selection: SelectionModel<any> = new SelectionModel<any>(false, []);
  constructor(
    private translocoService: TranslocoService,
    public dialog: MatDialog,
    public authService: AuthService,
    public router: Router,
    private dataGridService: ScreeningService,
  ) { }

  ngOnInit(): void {
    this.getScreening();
  }

  getScreening(): void {
    this.dataGridService
      .getScreening(
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
            this.dialog.open(ScreeningAlertComponent, {
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
    this.getScreening();
  }
  sort(sortEvent: Sort): void {
    this.sorting = [];
    if (sortEvent.direction) {
      this.sorting.push({
       property: sortEvent.active.split('.').pop(),
       direction: '' + sortEvent.direction,
      });
    }
    this.getScreening();
  }
  checkboxLabel(row?: any): string {
    return `${
      this.selection.isSelected(row) ? 'deselect' : 'select'
    } row ${row.position + 1}`;
  }
  openDialog(): void {
    this.dialogRef = this.dialog.open(ScreeningDialogComponent);

    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataGridService.saveScreening(result).subscribe(
          () => {
            this.getScreening();
          },
          (error: any) => {
            this.dialog.open(ScreeningAlertComponent, {
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
    this.dialogRef = this.dialog.open(ScreeningDialogComponent, {
      data: this.selectedRow,
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataGridService.saveScreening(result).subscribe(
          () => {
            this.getScreening();
            this.selectedRow = undefined;
          },
          (error: any) => {
            this.dialog.open(ScreeningAlertComponent, {
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
      .open(ScreeningAlertComponent, {
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
          this.dataGridService.deleteScreening(this.selectedRow.id).subscribe(
          () => {
            this.getScreening();
            this.selectedRow = undefined;
          },
          (error: any) => {
            this.dialog.open(ScreeningAlertComponent, {
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
    this.getScreening();
    this.pagingBar.firstPage();
  }

  searchReset(form: any): void {
    form.reset();
    this.getScreening();
  }
}
