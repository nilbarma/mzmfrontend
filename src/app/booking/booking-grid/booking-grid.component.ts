import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TranslocoService, AvailableLangs } from '@ngneat/transloco';
import { Pageable } from '../../core/interfaces/pageable';
import { AuthService } from '../../core/security/auth.service';
import { BookingAlertComponent } from '../booking-alert/booking-alert.component';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'public-booking-grid',
  templateUrl: './booking-grid.component.html',
  styleUrls: ['./booking-grid.component.scss'],
})
export class BookingGridComponent implements OnInit {
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
      name: 'screeningId',
      label: 'bookingmanagement.Booking.columns.screeningId',
    },
    {
      name: 'userId',
      label: 'bookingmanagement.Booking.columns.userId',
    },
    {
      name: 'bookingTime',
      label: 'bookingmanagement.Booking.columns.bookingTime',
    },
    {
      name: 'booked',
      label: 'bookingmanagement.Booking.columns.booked',
    },
    {
      name: 'active',
      label: 'bookingmanagement.Booking.columns.active',
    },
  ];
  displayedColumns: string[] = [
    'select',
      'screeningId',
      'userId',
      'bookingTime',
      'booked',
      'active',
    ];
  pageSize = 8;
  pageSizes: number[] = [8, 16, 24];
  selectedRow: any;

  dialogRef: MatDialogRef<BookingDialogComponent>;
  totalItems: number;
  searchTerms: any = {
    screeningId: undefined,
    userId: undefined,
    bookingTime: undefined,
    booked: undefined,
    active: undefined,
  };
  selection: SelectionModel<any> = new SelectionModel<any>(false, []);
  constructor(
    private translocoService: TranslocoService,
    public dialog: MatDialog,
    public authService: AuthService,
    public router: Router,
    private dataGridService: BookingService,
  ) { }

  ngOnInit(): void {
    this.getBooking();
  }

  getBooking(): void {
    this.dataGridService
      .getBooking(
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
            this.dialog.open(BookingAlertComponent, {
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
    this.getBooking();
  }
  sort(sortEvent: Sort): void {
    this.sorting = [];
    if (sortEvent.direction) {
      this.sorting.push({
       property: sortEvent.active.split('.').pop(),
       direction: '' + sortEvent.direction,
      });
    }
    this.getBooking();
  }
  checkboxLabel(row?: any): string {
    return `${
      this.selection.isSelected(row) ? 'deselect' : 'select'
    } row ${row.position + 1}`;
  }
  openDialog(): void {
    this.dialogRef = this.dialog.open(BookingDialogComponent);

    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataGridService.saveBooking(result).subscribe(
          () => {
            this.getBooking();
          },
          (error: any) => {
            this.dialog.open(BookingAlertComponent, {
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
    this.dialogRef = this.dialog.open(BookingDialogComponent, {
      data: this.selectedRow,
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataGridService.saveBooking(result).subscribe(
          () => {
            this.getBooking();
            this.selectedRow = undefined;
          },
          (error: any) => {
            this.dialog.open(BookingAlertComponent, {
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
      .open(BookingAlertComponent, {
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
          this.dataGridService.deleteBooking(this.selectedRow.id).subscribe(
          () => {
            this.getBooking();
            this.selectedRow = undefined;
          },
          (error: any) => {
            this.dialog.open(BookingAlertComponent, {
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
    this.getBooking();
    this.pagingBar.firstPage();
  }

  searchReset(form: any): void {
    form.reset();
    this.getBooking();
  }
}
