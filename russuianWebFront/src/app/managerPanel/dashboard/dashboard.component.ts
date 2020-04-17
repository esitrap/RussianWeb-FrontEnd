import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
//import { items } from '../../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
//let myValidator = new items();
export class DashboardComponent implements OnInit {

  //@Input() item: MenuItem;
  items: MenuItem[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {


    this.items = [
      {
        label: 'پست',
        icon: 'pi pi-envelope', routerLink: ['/posts'],
        visible: true
      },
      {
        label: 'کاربران',
        icon: 'pi pi-user-edit', routerLink: ['/users'],
        visible: true
      },
      {
        label: 'بازگشت',
        icon: 'pi pi-step-backward', routerLink: ['/dashboard'],
        visible: true
      },
      { separator: true },
      {
        label: 'خروج', icon: 'pi pi-times', routerLink: ['/home'],
        visible: true
      }
    ]
  }
}