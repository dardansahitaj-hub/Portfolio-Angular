import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DudeComponent } from './dude.component';

describe('DudeComponent', () => {
  let component: DudeComponent;
  let fixture: ComponentFixture<DudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DudeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
