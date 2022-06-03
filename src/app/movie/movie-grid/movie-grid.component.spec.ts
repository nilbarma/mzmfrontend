import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../core/core.module';

import { MovieService } from '../services/movie.service';
import { MovieGridComponent } from './movie-grid.component';

describe('MovieGridComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RouterTestingModule, CoreModule],
      declarations: [ MovieGridComponent ],
      providers: [MovieService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture: ComponentFixture<
      MovieGridComponent
    > = TestBed.createComponent(MovieGridComponent);
    const app: any = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
