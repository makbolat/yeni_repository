import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoyDurumComponent } from './portfoy-durum.component';

describe('PortfoyDurumComponent', () => {
  let component: PortfoyDurumComponent;
  let fixture: ComponentFixture<PortfoyDurumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoyDurumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoyDurumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
