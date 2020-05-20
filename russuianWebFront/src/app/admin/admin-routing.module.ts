import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../managerPanel/dashboard/dashboard.component';
import { PostsComponent } from '../managerPanel/postsManager/posts/posts.component';
import { UsersComponent } from '../managerPanel/users/users.component';
import { PostViewComponent } from '../post-view/post-view.component';
import {LoginpageComponent} from '../managerPanel/loginpage/loginpage.component'
import {ValidationpageComponent} from '../managerPanel/validationpage/validationpage.component'
import { AdminGuard } from  './admin.guard';

const routes: Routes = [
    {
        path: 'admin',
        component: DashboardComponent,
        children: [
            {
                path: 'list',
                component: ProjectListComponent,
                canActivate: [AdminGuard]
            },            
            {
                path: 'create',
                component: ProjectCreateComponent,
                canActivate: [AdminGuard]
            },
            {
                path: 'update',
                component: ProjectUpdateComponent,
                canActivate: [AdminGuard]
            },
            { 
                path: 'login', 
                component: LoginComponent 
            }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }