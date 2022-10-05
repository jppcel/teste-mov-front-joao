/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SliderHelperComponent } from './slider-helper.component';

describe('SliderHelperComponent', () => {
  let component: SliderHelperComponent;
  let fixture: ComponentFixture<SliderHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
