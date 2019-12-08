import { TodosComponent } from './08-integration-tests/2-todos/todos.component';
import { UserDetailsComponent } from './08-integration-tests/3-user-details/user-details.component';
import { HomeComponent } from './08-integration-tests/home/home.component';
import { UsersComponent } from './08-integration-tests/users/users.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'todos', component: TodosComponent },
  { path: '', component: HomeComponent },
];
