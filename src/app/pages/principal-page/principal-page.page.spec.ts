import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPagePage } from './principal-page.page';

describe('PrincipalPagePage', () => {
  let component: PrincipalPagePage;
  let fixture: ComponentFixture<PrincipalPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
