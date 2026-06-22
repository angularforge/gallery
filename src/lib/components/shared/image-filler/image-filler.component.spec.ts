import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFillerComponent } from './image-filler.component';

describe('ImageFillerComponent', () => {
  let component: ImageFillerComponent;
  let fixture: ComponentFixture<ImageFillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageFillerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageFillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
