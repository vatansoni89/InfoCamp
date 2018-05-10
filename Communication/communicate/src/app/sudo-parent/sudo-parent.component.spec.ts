import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudoParentComponent } from './sudo-parent.component';

describe('SudoParentComponent', () => {
  let component: SudoParentComponent;
  let fixture: ComponentFixture<SudoParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudoParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudoParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
