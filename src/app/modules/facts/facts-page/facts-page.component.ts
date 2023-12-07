import { Component } from '@angular/core';

@Component({
  selector: 'app-facts-page',
  templateUrl: './facts-page.component.html',
  styleUrls: ['./facts-page.component.scss']
})
export class FactsPageComponent {

  handleSearch(search: string) {
    console.log(search);
  }

}
