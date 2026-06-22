import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { Style } from '../../schema';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;

    // Required inputs
    fixture.componentRef.setInput('galleryImages', []);
    fixture.componentRef.setInput(
      'style',
      new Style('horizontal', '10px', '100%', '100%', '', 'default', '8px', 5, 'repeat(1,1fr)', 'repeat(1,1fr)'),
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
