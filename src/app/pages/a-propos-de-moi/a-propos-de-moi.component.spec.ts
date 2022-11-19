import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProposDeMoiComponent } from './a-propos-de-moi.component';

describe('AProposDeMoiComponent', () => {
  let component: AProposDeMoiComponent;
  let fixture: ComponentFixture<AProposDeMoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AProposDeMoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AProposDeMoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
