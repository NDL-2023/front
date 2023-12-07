import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchFactsService {
  #http = inject(HttpClient);


  search(search: string) {
    return this.#http.get(environment.API_URL).pipe(
      map((factsOrIntoxList: any) => {
        return factsOrIntoxList;
      })
    );
  }
}
