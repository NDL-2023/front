import { Component } from '@angular/core';
import { BaseModalComponent } from '../../../../core/components/base-modal/base-modal.component';
import { ModalPayload } from '../../../../core/models/modal/modal-payload';

@Component({
  selector: 'app-new-topic-modal',
  templateUrl: './new-topic-modal.component.html',
  styleUrls: ['./new-topic-modal.component.scss'],
})
export class NewTopicModalComponent extends BaseModalComponent {
  title: string = '';
  content: string = '';

  constructor() {
    super();
  }

  handleClose(event: ModalPayload) {
    const editedPayload = {
      ...event,
      data: { title: this.title, content: this.content },
    };
    this.onClose(editedPayload);
  }
}
