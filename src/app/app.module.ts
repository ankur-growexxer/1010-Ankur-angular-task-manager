import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './shared/services/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './shared/module/user/profile/profile.component';
import { EditProfileComponent } from './shared/module/user/edit-profile/edit-profile.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { StatusDirective } from './shared/directive/status.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HelpComponent,
    AboutComponent,
    HomeComponent,
    ProfileComponent,
    EditProfileComponent,
    CreateTaskComponent,
    EditTaskComponent,
    StatusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
