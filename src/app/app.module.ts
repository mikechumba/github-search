import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { UsersComponent } from './users/users.component';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';
import { UserDirective } from './user.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UsersComponent,
    UserDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
