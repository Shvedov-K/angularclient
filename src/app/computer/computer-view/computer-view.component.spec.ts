import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerViewComponent } from './computer-view.component';

describe('ComputerViewComponent', () => {
  let component: ComputerViewComponent;
  let fixture: ComponentFixture<ComputerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
