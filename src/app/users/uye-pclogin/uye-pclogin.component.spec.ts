import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UYEPCLoginComponent } from './uye-pclogin.component';

describe('UYEPCLoginComponent', () => {
  let component: UYEPCLoginComponent;
  let fixture: ComponentFixture<UYEPCLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UYEPCLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UYEPCLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
