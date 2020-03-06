import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalEngineeringComponent } from './chemical-engineering.component';

describe('ChemicalEngineeringComponent', () => {
  let component: ChemicalEngineeringComponent;
  let fixture: ComponentFixture<ChemicalEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChemicalEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
