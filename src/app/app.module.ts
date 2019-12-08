import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { VoterComponent } from './08-integration-tests/1-voter/voter.component';
import { TodosComponent } from './08-integration-tests/2-todos/todos.component';
import { UserDetailsComponent } from './08-integration-tests/3-user-details/user-details.component';
import { HomeComponent } from './08-integration-tests/home/home.component';
import { UsersComponent } from './08-integration-tests/users/users.component';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HighlightDirective } from './highlight.directive';

@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    HighlightDirective,
  ],

  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],

  bootstrap: [
    AppComponent
  ],

})
export class AppModule { }
