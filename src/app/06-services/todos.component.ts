import { OnInit } from '@angular/core';
import { TodoService } from './todo.service';

export class TodosComponent implements OnInit {

  todos: any = [];
  message: any;

  constructor(
    private service: TodoService,
  ) { }

  ngOnInit() {
    this.service
      .getTodos()
      .subscribe((toDos: any) => this.todos = toDos);
  }

  add(): void {
    const newTodo = { title: '... ' };

    this.service
      .add(newTodo)
      .subscribe(
        (toDo: any) => this.todos.push(toDo),
        (error: any) => this.message = error
      );
  }

  delete(id: number): void {
    if (confirm('Are you sure?')) {
      this.service
        .delete(id)
        .subscribe();
    }
  }
}
