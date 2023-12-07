import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();

  searchInput: string = "";

  handleSearch() {
    if(this.searchInput != "") {
      this.search.emit(this.searchInput);
    }
  }

}
