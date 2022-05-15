import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department, Employee, EmployeeWithExpense } from '../model/Department';

@Injectable({ providedIn: 'root' })
export class DashboardService {
   readonly api_url:string="http://localhost:3000"
  constructor(private http:HttpClient) {}

  getDepartments():Observable<Department[]>{
      return this.http.get<Department[]>(`${this.api_url}/departments`);
  }

  calculateTotalSalary(employees:Employee[])  {
    let totalSalary:number = 0
    employees.forEach((employee:EmployeeWithExpense) => {
      
      totalSalary += parseInt(employee.salary.toString());
     
      if (employee.reportee) {
        let temp=parseInt(this.calculateTotalSalary(employee.reportee).toString())
        totalSalary += temp;
        employee.totalExpense=temp;
      }
      if(employee.totalExpense)
      {employee.totalExpense+=parseInt(employee.salary.toString())}
    })
   
    return totalSalary
  }
}
