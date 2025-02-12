import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ToDoListComponent } from './to-do-list.component';
import { FormsModule } from '@angular/forms';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoListComponent],
      imports: [FormsModule], // Import FormsModule for two-way binding (ngModel)
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new task to the todo list', () => {
    component.Text = 'New Task';
    component.add();

    expect(component.todos.length).toBe(1);
    expect(component.todos[0].text).toBe('New Task');
  });

  it('should not add a task if Text is empty', () => {
    component.Text = '';
    component.add();

    expect(component.todos.length).toBe(0);
  });

  it('should remove a task from the todo list', () => {
    component.todos = [{ text: 'Task 1' }, { text: 'Task 2' }];
    component.remove(0);

    expect(component.todos.length).toBe(1);
    expect(component.todos[0].text).toBe('Task 2');
  });

  it('should update the Text input field when typing', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'Test Task';
    inputElement.dispatchEvent(new Event('input'));

    expect(component.Text).toBe('Test Task');
  });

  it('should call add() method when clicking Add button', () => {
    const button = fixture.debugElement.query(By.css('.btn-success')).nativeElement;
    component.Text = 'New Task';

    spyOn(component, 'add'); // Spy on the add method
    button.click();

    expect(component.add).toHaveBeenCalled();
  });

  it('should display the task text in the list', () => {
    component.todos = [{ text: 'Test Task' }];
    fixture.detectChanges();

    const taskElement = fixture.debugElement.query(By.css('h5')).nativeElement;
    expect(taskElement.textContent).toBe('Test Task');
  });
});
