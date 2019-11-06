import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenunciasPagePage } from './denuncias-page.page';

describe('DenunciasPagePage', () => {
  let component: DenunciasPagePage;
  let fixture: ComponentFixture<DenunciasPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenunciasPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciasPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
