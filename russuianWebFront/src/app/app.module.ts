import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { UsersComponent } from './managerPanel/users/users.component';
import { PostsComponent } from './managerPanel/postsManager/posts/posts.component';
import { PostDetailComponent } from './managerPanel/postsManager/posts/post-detailManager/post-detail.component';
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http'
import { UsersService } from './managerPanel/users/users.service';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import { CreatePostComponent } from './managerPanel/postsManager/posts/create-post/create-post.component';
import { CreateuserComponent } from './managerPanel/users/createuser/createuser.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    PostDetailComponent,
    CreatePostComponent,
    CreateuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    AccordionModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    PasswordModule
  ],
  providers: [PostsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
