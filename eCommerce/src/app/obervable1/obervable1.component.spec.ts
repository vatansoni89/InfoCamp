import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Obervable1Component } from './obervable1.component';

describe('Obervable1Component', () => {
  let component: Obervable1Component;
  let fixture: ComponentFixture<Obervable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Obervable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Obervable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
