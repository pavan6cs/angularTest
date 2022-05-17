import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';
import { AuthService } from 'src/app/features/login/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.component.html',
  styleUrls: ['app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  userName: string = '';
  authServiceSubscription!: SubscriptionLike;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.authServiceSubscription = this.authService
      .getUserName()
      .subscribe((name) => (this.userName = name));
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
