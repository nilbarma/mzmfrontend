import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { AuthDataModule } from './auth/auth.module';
import { SampleDataModule } from './sampledata/sampledata.module';
import { BookingModule } from './booking/booking.module';
import { AuditoriumModule } from './auditorium/auditorium.module';
import { MovieModule } from './movie/movie.module';
import { ScreeningModule } from './screening/screening.module';
import { SeatBookedModule } from './seatbooked/seatbooked.module';
import { SeatModule } from './seat/seat.module';
import { TheatreModule } from './theatre/theatre.module';
import { UserModule } from './user/user.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        AuthDataModule,
        LayoutModule,
        SampleDataModule,
        HttpClientModule,
        BookingModule,
        AuditoriumModule,
        MovieModule,
        ScreeningModule,
        SeatBookedModule,
        SeatModule,
        TheatreModule,
        UserModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}