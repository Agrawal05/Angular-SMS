import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationFirstComponent } from './view-encapsulation-first.component';

describe('ViewEncapsulationFirstComponent', () => {
  let component: ViewEncapsulationFirstComponent;
  let fixture: ComponentFixture<ViewEncapsulationFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
