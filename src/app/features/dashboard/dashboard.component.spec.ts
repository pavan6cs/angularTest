import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from "./dashboard.component";
import { DashboardService } from "./services/dashboard.service";

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ DashboardComponent ],
        imports:[MatFormFieldModule,MatSelectModule,MatOptionModule,HttpClientModule,BrowserAnimationsModule],
        providers:[DashboardService]
      })
      .compileComponents();
    });
    beforeEach(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
      });

    // it("when selected value is all show CFT&DCH department",()=>{
    //     fixture = TestBed.createComponent(DashboardComponent);
    //     const component:HTMLElement  = fixture.debugElement.nativeElement;
    //     const mainContent=component.querySelector('.mainContent_body')!;
    //     const table=mainContent.getElementsByTagName('tr');
    //     console.log(table.item.length);

    // })
})