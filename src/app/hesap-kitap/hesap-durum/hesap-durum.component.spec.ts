import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HesapDurumComponent } from './hesap-durum.component';

describe('HesapDurumComponent', () => {
  let component: HesapDurumComponent;
  let fixture: ComponentFixture<HesapDurumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HesapDurumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HesapDurumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
