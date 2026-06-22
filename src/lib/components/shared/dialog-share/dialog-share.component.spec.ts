import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { DialogShareComponent } from './dialog-share.component';

describe('DialogShareComponent', () => {
  let component: DialogShareComponent;
  let fixture: ComponentFixture<DialogShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogShareComponent],
      providers: [provideNoopAnimations()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
