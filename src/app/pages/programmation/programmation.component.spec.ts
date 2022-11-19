import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammationComponent } from './programmation.component';

describe('ProgrammationComponent', () => {
  let component: ProgrammationComponent;
  let fixture: ComponentFixture<ProgrammationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
