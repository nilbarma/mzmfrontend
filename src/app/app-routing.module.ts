import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/security/auth-guard.service';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';


const routes: Routes = [{
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./auth/auth.module').then(m => m.AuthDataModule)
    },
   
    {
        path: 'home',
        component: NavBarComponent,
        canActivateChild: [
            AuthGuard
        ],
        children: [{
                path: 'initial',
                loadChildren: () =>
                    import('./home/initial-page/initial-page.module').then(
                        m => m.InitialPageModule,
                    )
            },
            {
                path: 'booking',
                loadChildren: () =>
                    import('./booking/booking.module').then(
                        m => m.BookingModule,
                    )
            },
            {
                path: 'auditorium',
                loadChildren: () =>
                    import('./auditorium/auditorium.module').then(
                        m => m.AuditoriumModule,
                    )
            },
            {
                path: 'movie',
                loadChildren: () =>
                    import('./movie/movie.module').then(
                        m => m.MovieModule,
                    )
            },
            {
                path: 'screening',
                loadChildren: () =>
                    import('./screening/screening.module').then(
                        m => m.ScreeningModule,
                    )
            },
            {
                path: 'seatBooked',
                loadChildren: () =>
                    import('./seatbooked/seatbooked.module').then(
                        m => m.SeatBookedModule,
                    )
            },
            {
                path: 'seat',
                loadChildren: () =>
                    import('./seat/seat.module').then(
                        m => m.SeatModule,
                    )
            },
            {
                path: 'theatre',
                loadChildren: () =>
                    import('./theatre/theatre.module').then(
                        m => m.TheatreModule,
                    )
            },
             {
                path: 'user',
                loadChildren: () =>
                    import('./user/user.module').then(
                        m => m.UserModule,
                    )
            }
        ]
    }
   
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}