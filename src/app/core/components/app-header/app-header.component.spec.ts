import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppHeaderComponent } from './app-header.component';
describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderComponent ],
      imports:[MatIconModule,MatToolbarModule]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a title name 'Jhon'`, () => {
    fixture = TestBed.createComponent(AppHeaderComponent);
   const component:HTMLElement  = fixture.debugElement.nativeElement;
   const p=component.querySelector('.name')!;
    expect(p.textContent).toEqual('Jhon');
  });
});