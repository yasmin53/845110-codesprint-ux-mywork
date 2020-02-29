import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacegiftcardsComponent } from './placegiftcards.component';

describe('PlacegiftcardsComponent', () => {
  let component: PlacegiftcardsComponent;
  let fixture: ComponentFixture<PlacegiftcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacegiftcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacegiftcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
