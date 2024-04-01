import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialDisplayComponent } from './initial-display.component';

describe('InitialDisplayComponent', () => {
  let component: InitialDisplayComponent;
  let fixture: ComponentFixture<InitialDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
