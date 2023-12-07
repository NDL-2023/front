import { Component, inject } from '@angular/core';
import { SearchFactsService } from '../services/search-facts.service';
import { Card, CardType } from '../../../core/models/api/card/card.model';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss'],
})
export class FeedPageComponent {
  #searchFactsService = inject(SearchFactsService);

  handleSearch(search: string) {
    this.#searchFactsService.search(search).subscribe(list => {
      console.log(list);
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
