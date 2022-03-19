import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolSecimiComponent } from './rol-secimi.component';

describe('RolSecimiComponent', () => {
  let component: RolSecimiComponent;
  let fixture: ComponentFixture<RolSecimiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolSecimiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolSecimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
