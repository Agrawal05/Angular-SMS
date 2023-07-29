import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevtoolDetectComponent } from './devtool-detect.component';

describe('DevtoolDetectComponent', () => {
  let component: DevtoolDetectComponent;
  let fixture: ComponentFixture<DevtoolDetectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevtoolDetectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevtoolDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
