import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HesapKitapMainComponent } from './hesap-kitap-main.component';

describe('HesapKitapMainComponent', () => {
  let component: HesapKitapMainComponent;
  let fixture: ComponentFixture<HesapKitapMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HesapKitapMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HesapKitapMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
