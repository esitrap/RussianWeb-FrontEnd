import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  items: MenuItem[];
  
  constructor() { }

  ngOnInit() {
    this.items = [{label: 'پنل مدیریت', icon: 'pi pi-fw pi-times'}
  ]
  }

}
