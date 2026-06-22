import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPicturesBtnComponent } from './all-pictures-btn.component';

describe('AllPicturesBtnComponent', () => {
  let component: AllPicturesBtnComponent;
  let fixture: ComponentFixture<AllPicturesBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPicturesBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPicturesBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
