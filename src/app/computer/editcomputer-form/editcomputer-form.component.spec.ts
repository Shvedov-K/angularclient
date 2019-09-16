import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcomputerFormComponent } from './editcomputer-form.component';

describe('EditcomputerFormComponent', () => {
  let component: EditcomputerFormComponent;
  let fixture: ComponentFixture<EditcomputerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcomputerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcomputerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
