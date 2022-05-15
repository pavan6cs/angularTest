import { Department,Employee, EmployeeWithExpense } from './model/Department';
import { DashboardService } from './services/dashboard.service';
import { SubscriptionLike } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls:["./dashboard.component.scss"] 
})
export class DashboardComponent implements OnInit,OnDestroy {
  department: { id: number; name: string }[] = [];
  departmentSubscription!: SubscriptionLike;
  result: Department[] = [];
  selected=-1;
  departMentExpense: {name:string; expense:number}[]=[];
  employeeWithExpense: EmployeeWithExpense[]=[];
  selectedDepartment="";
  data:EmployeeWithExpense[]=[];
  selectedDepartmentExpense:number=0;
  salary: number=0;

  constructor(private dashboardService: DashboardService) {
  }
  ngOnDestroy(): void {
    if(this.departmentSubscription){
      this.departmentSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.departmentSubscription = this.dashboardService
      .getDepartments()
      .subscribe((data) => {
        this.department.push({id: -1 , name: "All"});
        data.forEach((val)=>{
          this.department.push({id: val.id , name: val.departmentName});
        })
        this.result = data;
        this.getDepartMentExpense(data)
      });
  }


  getDepartMentExpense(departmentList: Department[]){
    departmentList.forEach((department)=>{
    let salary= this.dashboardService.calculateTotalSalary(department.employee);
     this.departMentExpense.push({name:department.departmentName,expense:salary});
    });
  }

  change(val:MatSelectChange){
    this.selected=val.value;
    this.result.forEach((department)=>{
      if(department.id===val.value){
        this.selectedDepartment=department.departmentName;
        let expense=this.departMentExpense.find(e=>e.name==department.departmentName)?.expense;
        if(expense){
          this.selectedDepartmentExpense=expense;
        }
        this.data=department.employee;
      }
    });
  
  }

}
