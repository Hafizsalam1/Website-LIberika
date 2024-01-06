import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaleidoskopComponent } from './kaleidoskop.component';

describe('KaleidoskopComponent', () => {
  let component: KaleidoskopComponent;
  let fixture: ComponentFixture<KaleidoskopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KaleidoskopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KaleidoskopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
