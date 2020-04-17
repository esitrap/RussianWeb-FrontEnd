import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './managerPanel/dashboard/dashboard.component';
import { PostsComponent } from './managerPanel/postsManager/posts/posts.component';
import { UsersComponent } from './managerPanel/users/users.component';
import { PostViewComponent } from './post-view/post-view.component';
import {LoginpageComponent} from './managerPanel/loginpage/loginpage.component'
import {ValidationpageComponent} from './managerPanel/validationpage/validationpage.component'

const routes: Routes = [{ path: 'posts', component: PostsComponent },
{ path: 'users', component: UsersComponent },
{ path: 'managerPanel', component: LoginpageComponent },
{ path: 'home', component: PostViewComponent },
{ path: 'validationpage', component: ValidationpageComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
