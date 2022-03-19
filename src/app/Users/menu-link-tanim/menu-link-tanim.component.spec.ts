import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLinkTanimComponent } from './menu-link-tanim.component';

describe('MenuLinkTanimComponent', () => {
  let component: MenuLinkTanimComponent;
  let fixture: ComponentFixture<MenuLinkTanimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLinkTanimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLinkTanimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
