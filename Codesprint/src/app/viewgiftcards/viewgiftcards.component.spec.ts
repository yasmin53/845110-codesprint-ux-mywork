import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgiftcardsComponent } from './viewgiftcards.component';

describe('ViewgiftcardsComponent', () => {
  let component: ViewgiftcardsComponent;
  let fixture: ComponentFixture<ViewgiftcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewgiftcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgiftcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
