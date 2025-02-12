import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  Text: string = '';
  todos: any = [];

  add() {
    if (this.Text !== '') {
      this.todos.push({ text: this.Text});
      this.Text = '';
    }
  }
  remove(index: number) {
    this.todos.splice(index, 1);
  }
}
