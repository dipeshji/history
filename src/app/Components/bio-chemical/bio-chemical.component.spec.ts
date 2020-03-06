import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioChemicalComponent } from './bio-chemical.component';

describe('BioChemicalComponent', () => {
  let component: BioChemicalComponent;
  let fixture: ComponentFixture<BioChemicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioChemicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioChemicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
