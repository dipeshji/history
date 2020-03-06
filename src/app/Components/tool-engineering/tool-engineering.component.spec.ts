import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolEngineeringComponent } from './tool-engineering.component';

describe('ToolEngineeringComponent', () => {
  let component: ToolEngineeringComponent;
  let fixture: ComponentFixture<ToolEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
