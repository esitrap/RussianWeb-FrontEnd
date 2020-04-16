import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'russuianWeb';
  items: MenuItem[];
  
  ngOnInit() {
    this.items = [
      {
        label: 'خانه',
        icon: 'pi pi-home',routerLink: ['/home'],
      },
      {
        label: 'پست',
        icon: 'pi pi-envelope',routerLink: ['/posts'],
        visible: false
      },
      {
        label: 'کاربران',
        icon: 'pi pi-user-edit',routerLink: ['/users'],
        visible: false
      },
      { separator: false },
      {
        label: 'خروج', icon: 'pi pi-times',routerLink: ['/home'],
        visible: false
      }
    ]
  }
}