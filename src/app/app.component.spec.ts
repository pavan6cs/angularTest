import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have app-header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.nativeElement;
    expect(app.querySelector('app-header')).toBeTruthy();
  });
  it('should have app-footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.nativeElement;
    expect(app.querySelector('app-footer')).toBeTruthy();
  });
  it('should have dashboard', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.nativeElement;
    expect(app.querySelector('dashboard')).toBeTruthy();
  });
});
