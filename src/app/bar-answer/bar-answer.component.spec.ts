import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarAnswerComponent } from './bar-answer.component';

describe('BarAnswerComponent', () => {
  let component: BarAnswerComponent;
  let fixture: ComponentFixture<BarAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
