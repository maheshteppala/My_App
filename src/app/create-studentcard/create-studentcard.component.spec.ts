import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentcardComponent } from './create-studentcard.component';

describe('CreateStudentcardComponent', () => {
  let component: CreateStudentcardComponent;
  let fixture: ComponentFixture<CreateStudentcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
