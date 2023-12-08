import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgForestComponent } from './svg-forest.component';

describe('SvgForestComponent', () => {
  let component: SvgForestComponent;
  let fixture: ComponentFixture<SvgForestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgForestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
