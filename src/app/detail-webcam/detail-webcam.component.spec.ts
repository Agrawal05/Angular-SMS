import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWebcamComponent } from './detail-webcam.component';

describe('DetailWebcamComponent', () => {
  let component: DetailWebcamComponent;
  let fixture: ComponentFixture<DetailWebcamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailWebcamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
