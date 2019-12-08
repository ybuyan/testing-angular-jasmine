import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {

  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({

        declarations: [
          TodosComponent,
        ],

        imports: [
          HttpClientModule,
        ],

        providers: [
          TodoService,
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
