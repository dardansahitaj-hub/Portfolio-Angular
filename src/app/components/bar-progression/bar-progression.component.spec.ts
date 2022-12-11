import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarProgressionComponent } from './bar-progression.component';

describe('BarProgressionComponent', () => {
  let component: BarProgressionComponent;
  let fixture: ComponentFixture<BarProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarProgressionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
