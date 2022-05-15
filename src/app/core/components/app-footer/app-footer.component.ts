import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `<mat-toolbar color="primary" class="footer">
    <p>EXM 2022</p>
    <span class="example-spacer"></span>
    <p>Contact: expenseteam@dch.com</p>
  </mat-toolbar>`,
  styleUrls:['app-footer.component.scss']
})

export class AppFooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}