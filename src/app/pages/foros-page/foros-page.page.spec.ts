import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForosPagePage } from './foros-page.page';

describe('ForosPagePage', () => {
  let component: ForosPagePage;
  let fixture: ComponentFixture<ForosPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForosPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForosPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
