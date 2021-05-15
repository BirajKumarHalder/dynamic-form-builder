import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecordaryrouteComponent } from './secordaryroute.component';

describe('SecordaryrouteComponent', () => {
  let component: SecordaryrouteComponent;
  let fixture: ComponentFixture<SecordaryrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecordaryrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecordaryrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
