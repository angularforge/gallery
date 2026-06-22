import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullGalleryHeaderOptionsComponent } from './full-gallery-header-options.component';

describe('HeaderOptionsComponent', () => {
  let component: FullGalleryHeaderOptionsComponent;
  let fixture: ComponentFixture<FullGalleryHeaderOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullGalleryHeaderOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullGalleryHeaderOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
