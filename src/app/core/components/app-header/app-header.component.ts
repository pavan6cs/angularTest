import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/features/login/service/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {
    constructor(private authService:AuthService,private router: Router) { }
    ngOnInit() { }
    logout(){
        this.authService.logout();
        this.router.navigateByUrl('/login');
      }
    
}