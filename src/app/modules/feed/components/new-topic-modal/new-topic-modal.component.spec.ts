import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTopicModalComponent } from './new-topic-modal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FeedModule } from '../../feed.module';

describe('CustomModalComponent', () => {
  let component: NewTopicModalComponent;
  let fixture: ComponentFixture<NewTopicModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTopicModalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FeedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NewTopicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
