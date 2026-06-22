import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxHeaderOptionsComponent } from './lightbox-header-options.component';

describe('LightboxHeaderOptionsComponent', () => {
  let component: LightboxHeaderOptionsComponent;
  let fixture: ComponentFixture<LightboxHeaderOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightboxHeaderOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightboxHeaderOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
