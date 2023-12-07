import { Component, inject } from '@angular/core';
import { SearchFactsService } from '../services/search-facts.service';

@Component({
  selector: 'app-facts-page',
  templateUrl: './facts-page.component.html',
  styleUrls: ['./facts-page.component.scss']
})
export class FactsPageComponent {
  #searchFactsService = inject(SearchFactsService);

  handleSearch(search: string) {
    this.#searchFactsService.search(search)
    .subscribe((list) => {
      console.log(list);
    });
  }

}
