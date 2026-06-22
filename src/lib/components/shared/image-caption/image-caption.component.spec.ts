import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCaptionComponent } from './image-caption.component';

describe('ImageCaptionComponent', () => {
  let component: ImageCaptionComponent;
  let fixture: ComponentFixture<ImageCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCaptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
