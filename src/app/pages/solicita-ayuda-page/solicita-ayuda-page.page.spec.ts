import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaAyudaPagePage } from './solicita-ayuda-page.page';

describe('SolicitaAyudaPagePage', () => {
  let component: SolicitaAyudaPagePage;
  let fixture: ComponentFixture<SolicitaAyudaPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitaAyudaPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitaAyudaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
