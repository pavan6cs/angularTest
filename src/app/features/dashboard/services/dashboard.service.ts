import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/Department';

@Injectable({ providedIn: 'root' })
export class DashboardService {
   readonly api_url:string="http://localhost:3000"
  constructor(private http:HttpClient) {}

  getDepartments():Observable<Department[]>{
      return this.http.get<Department[]>(`${this.api_url}/departments`);
  }

  calculateExpenses(){
      
  }
}
