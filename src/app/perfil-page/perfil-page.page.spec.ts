import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPagePage } from './perfil-page.page';

describe('PerfilPagePage', () => {
  let component: PerfilPagePage;
  let fixture: ComponentFixture<PerfilPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
