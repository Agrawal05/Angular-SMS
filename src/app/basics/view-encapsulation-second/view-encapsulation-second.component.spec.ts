import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationSecondComponent } from './view-encapsulation-second.component';

describe('ViewEncapsulationSecondComponent', () => {
  let component: ViewEncapsulationSecondComponent;
  let fixture: ComponentFixture<ViewEncapsulationSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
