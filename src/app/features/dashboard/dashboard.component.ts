import { Department } from './model/Department';
import { DashboardService } from './services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Subscription, SubscriptionLike } from 'rxjs';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls:['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  department: { id: number; name: string }[] = [];
  departmentSubscription!: SubscriptionLike;
  result: Department[] = [];
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.departmentSubscription = this.dashboardService
      .getDepartments()
      .subscribe((data) => {
        this.result = data;
        console.log(data)
      });
  }
}
