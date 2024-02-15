import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseLifecycleHookComponent } from './use-lifecycle-hook.component';

describe('UseLifecycleHookComponent', () => {
  let component: UseLifecycleHookComponent;
  let fixture: ComponentFixture<UseLifecycleHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseLifecycleHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseLifecycleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
