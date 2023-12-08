import { Component, inject } from '@angular/core';
import { SearchFactsService } from '../services/search-facts.service';
import { Card, CardType } from '../../../core/models/api/card/card.model';
import { ModalService } from '../../../core/services/modal/modal.service';
import { NewTopicModalComponent } from '../components/new-topic-modal/new-topic-modal.component';
import { takeUntil } from 'rxjs';
import { BaseAppComponent } from '../../../core/components/base-app/base-app.component';
import { translate } from '@ngneat/transloco';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss'],
})
export class FeedPageComponent extends BaseAppComponent {
  #searchFactsService = inject(SearchFactsService);
  #modalService = inject(ModalService);

  handleSearch(search: string) {
    this.#searchFactsService.search(search).subscribe(list => {
      console.log(list);
    });
  }

  handleNewTopic() {
    this.#modalService
      .open(NewTopicModalComponent, {
        title: translate('feed.add-topic.modal-title'),
        cancelText: translate('feed.add-topic.modal-title-cancel'),
        confirmText: translate('feed.add-topic.modal-title-submit'),
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        console.log(result);
      });
  }

  card_example: Card = {
    id: 1,
    title: 'Fact 1',
    content:
      'Fact 1 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquet nisl nunc eu justo.',
    type: CardType.FACT,
  };
  card_question_example: Card = {
    id: 2,
    title: 'Question 1',
    content:
      'Question 1 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquet nisl nunc eu justo.',
    type: CardType.QUESTION,
    isTrue: true,
    explanation: 'Question 1 explanation',
  };

  card_forum_example: Card = {
    id: 3,
    title: 'Forum 1',
    content:
      'Forum 1 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquet nisl nunc eu justo.',
    type: CardType.TOPIC,
  };
}
