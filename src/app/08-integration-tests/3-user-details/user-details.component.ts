import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'testing-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  userId: number;

  private subscriptions = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.route
        .params
        .subscribe((p: Params) => {
          if (!!p && !p.id) {
            this.router.navigate(['not-found']);
          }
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  save(): void {
    this.router.navigate(['users']);
  }
}
