import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGalleryComponent } from './ngx-gallery.component';

describe('NgxGalleryComponent', () => {
  let component: NgxGalleryComponent;
  let fixture: ComponentFixture<NgxGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
