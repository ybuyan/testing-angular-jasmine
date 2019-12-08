import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { from } from 'rxjs/internal/observable/from';
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
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should load `TODO`s from the server', () => {

    const toDos = [1, 2, 3];

    // This work if you have provided that dependency at the module level
    const service = TestBed.get(TodoService);

    spyOn(service, 'getTodos').and.returnValue(from([toDos]));

    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });

});
