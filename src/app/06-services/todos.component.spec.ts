import { from } from 'rxjs/internal/observable/from';
import { TodoService } from './todo.service';
import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {

  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('Should set `todos` property with items returned form the server', () => {

    const toDos = [1, 2, 3];

    spyOn(service, 'getTodos').and.callFake(() => {
      return from([toDos]);
    });

    component.ngOnInit();

    expect(component.todos).toBe(toDos);
  });
});
