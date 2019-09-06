import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import { UsersComponent } from './managerPanel/users/users.component';
import { PostsComponent } from './managerPanel/postsManager/posts/posts.component';
import { PostDetailComponent } from './managerPanel/postsManager/posts/post-detailManager/post-detail.component';
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
     AccordionModule,
     HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
