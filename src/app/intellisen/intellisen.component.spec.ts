import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellisenComponent } from './intellisen.component';

describe('IntellisenComponent', () => {
  let component: IntellisenComponent;
  let fixture: ComponentFixture<IntellisenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntellisenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntellisenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
