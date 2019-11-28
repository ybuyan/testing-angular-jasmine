import { EMPTY } from 'rxjs/internal/observable/empty';
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

  it('Should call the server to save the changes when a new `todo` item is added', () => {

    const spy = spyOn(service, 'add').and.callFake(() => {
      return EMPTY;
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('Should add the new `todo` returned from the server', () => {

    const toDo = { id: 1, title: 'a' };

    spyOn(service, 'add').and.returnValue(from([toDo]));

    component.add();

    expect(component.todos.indexOf(toDo)).toBeGreaterThan(-1);
  });

});
