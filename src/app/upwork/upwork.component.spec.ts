import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpworkComponent } from './upwork.component';

describe('UpworkComponent', () => {
  let component: UpworkComponent;
  let fixture: ComponentFixture<UpworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpworkComponent]
    });
    fixture = TestBed.createComponent(UpworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
