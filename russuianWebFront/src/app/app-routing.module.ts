import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './managerPanel/dashboard/dashboard.component';
import { PostsComponent } from './managerPanel/postsManager/posts/posts.component';
import { UsersComponent } from './managerPanel/users/users.component';
import { PostViewComponent } from './post-view/post-view.component';
import {LoginpageComponent} from './managerPanel/loginpage/loginpage.component'
import {ValidationpageComponent} from './managerPanel/validationpage/validationpage.component'
import { AuthGuard } from './auth-guard.service';
import { PostViewDetailComponent } from './post-view-detail/post-view-detail.component';


const routes: Routes = [{ path: 'posts', component: PostsComponent },
{ path: 'users', component: UsersComponent },
{ path: 'managerpanel', component: LoginpageComponent },
{ path: 'home', component: PostViewComponent },
{ path: 'validationpage', component: ValidationpageComponent },
{ path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard] },
{ path: 'postviewdetail', component: PostViewDetailComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
