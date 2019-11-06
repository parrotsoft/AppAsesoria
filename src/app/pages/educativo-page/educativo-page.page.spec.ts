import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducativoPagePage } from './educativo-page.page';

describe('EducativoPagePage', () => {
  let component: EducativoPagePage;
  let fixture: ComponentFixture<EducativoPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducativoPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducativoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
