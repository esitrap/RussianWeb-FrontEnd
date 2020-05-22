import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { UsersComponent } from './managerPanel/users/users.component';
import { PostsComponent } from './managerPanel/postsManager/posts/posts.component';
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http'
import { UsersService } from './managerPanel/users/users.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CreatePostComponent } from './managerPanel/postsManager/posts/create-post/create-post.component';
import { CreateuserComponent } from './managerPanel/users/createuser/createuser.component';
import { EditPostComponent } from './managerPanel/postsManager/posts/edit-post/edit-post.component';
import { EditUserComponent } from './managerPanel/users/edit-user/edit-user.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagerPlanRoutingModule } from './managerPanel/manager-plan-routing.module';
import { DashboardComponent } from './managerPanel/dashboard/dashboard.component';
import { PostViewComponent } from './post-view/post-view.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {CardModule} from 'primeng/card';
import { LoginpageComponent } from './managerPanel/loginpage/loginpage.component';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationpageComponent } from './managerPanel/validationpage/validationpage.component';
import { AuthGuard } from './auth-guard.service';
import { Auth } from 'src/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CreatePostComponent,
    CreateuserComponent,
    EditPostComponent,
    EditUserComponent,
    DashboardComponent,
    PostViewComponent,
    LoginpageComponent,
    ValidationpageComponent,

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
    PasswordModule,
    DialogModule,
    BrowserAnimationsModule,
    ManagerPlanRoutingModule,
    MenubarModule,
    InputTextareaModule,
    EditorModule,
    ConfirmDialogModule,
    CardModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    PanelModule,
    DropdownModule,
    ReactiveFormsModule
  ],
  providers: [PostsService, UsersService, ConfirmationService, AuthGuard, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
