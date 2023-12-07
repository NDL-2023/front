import { Component, inject } from '@angular/core';
import { SearchFactsService } from '../services/search-facts.service';
import { Card, CardType } from '../../../core/models/api/card/card.model';

@Component({
  selector: 'app-facts-page',
  templateUrl: './facts-page.component.html',
  styleUrls: ['./facts-page.component.scss'],
})
export class FactsPageComponent {
  #searchFactsService = inject(SearchFactsService);

  handleSearch(search: string) {
    this.#searchFactsService.search(search).subscribe(list => {
      console.log(list);
    });
  }

  card_example: Card = {
    title: 'Fact 1',
    content:
      'Fact 1 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquet nisl nunc eu justo.',
    type: CardType.FACT,
  };
}
