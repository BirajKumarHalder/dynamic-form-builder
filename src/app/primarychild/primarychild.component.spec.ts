import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarychildComponent } from './primarychild.component';

describe('PrimarychildComponent', () => {
  let component: PrimarychildComponent;
  let fixture: ComponentFixture<PrimarychildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimarychildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarychildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
