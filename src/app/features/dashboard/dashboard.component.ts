import { Department,Employee } from './model/Department';
import { DashboardService } from './services/dashboard.service';
import { BehaviorSubject, Subscription, SubscriptionLike } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls:["./dashboard.component.scss"] 
})
export class DashboardComponent implements OnInit {
  department: { id: number; name: string }[] = [];
  departmentSubscription!: SubscriptionLike;
  result: Department[] = [];
  selected=-1;
  departMentExpense: {name:string; expense:number}[]=[];

  treeControl = new NestedTreeControl<Employee>(node => node.reportee);
  dataSource = new MatTreeNestedDataSource<Employee>();

  hasChild = (_: number, node: Employee) => !!node.reportee && node.reportee.length > 0;
  salary: number=0;

  constructor(private dashboardService: DashboardService) {
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
        console.log(data)
      });
  }


  


  getDepartMentExpense(departmentList: Department[]){
   
    departmentList.forEach((department)=>{
    let salary:number=0;
     department.employee.forEach((employee)=>{
       salary+=parseInt(employee.salary.toString());
       if(employee.reportee){
         employee.reportee.forEach((reportee)=>{
          salary+=parseInt(reportee.salary.toString());
          if(employee.reportee){
            employee.reportee.forEach((e)=>{
              salary+=parseInt(e.salary.toString());
          });
        }
         })
       }
     })
     this.departMentExpense.push({name:department.departmentName,expense:salary});
    });

    departmentList.forEach((department)=>{
      let sal=this.calculateExpense(department.employee,0);
      console.log(department.departmentName,sal);
    });
  }

  calculateExpense(employee:Employee[],sal:number){
    employee.forEach((e)=>{
     this.salary=sal+parseInt(e.salary.toString());
      if(e.reportee){
        return  this.calculateExpense(e.reportee,sal)
       }else{
         return sal;
       }
    });
    return this.salary;
  }
  change(val:MatSelectChange){
    this.selected=val.value;
    this.result.forEach((department)=>{
      if(department.id===val.value){
        this.dataSource.data=department.employee;
        console.log(department.employee)
      }
    });
   console.log(val.value);
  }

  // calculateIterationSalary(employee: Employee,salary:number){
  //   salary+=employee.salary;
  //     return employee.reportee?calculateIterationSalary() 
  // }


  

}
