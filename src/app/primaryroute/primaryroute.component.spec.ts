import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryrouteComponent } from './primaryroute.component';

describe('PrimaryrouteComponent', () => {
  let component: PrimaryrouteComponent;
  let fixture: ComponentFixture<PrimaryrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
