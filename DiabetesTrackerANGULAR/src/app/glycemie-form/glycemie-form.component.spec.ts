import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlycemieFormComponent } from './glycemie-form.component';

describe('GlycemieFormComponent', () => {
  let component: GlycemieFormComponent;
  let fixture: ComponentFixture<GlycemieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlycemieFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlycemieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
