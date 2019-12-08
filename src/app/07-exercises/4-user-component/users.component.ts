import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from './user.service';

export class UsersComponent implements OnInit, OnDestroy {

  users: any[];

  private subscritions = new Subscription();

  constructor(
    private service: UserService
  ) { }

  ngOnInit() {
    this.subscritions.add(
      this.service
        .getUsers()
        .subscribe((users: any) => this.users = users)
    );
  }

  ngOnDestroy() {
    this.subscritions.unsubscribe();
  }

  deleteUser(user: any) {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {

      const index = this.users.indexOf(user);
      this.users.splice(index, 1);

      this.subscritions.add(
        this.service
          .deleteUser(user.id)
          .subscribe({
            error: () => {
              alert('Could not delete the user.');
              this.users.splice(index, 0, user);
            }
          })
      );
    }
  }
}
