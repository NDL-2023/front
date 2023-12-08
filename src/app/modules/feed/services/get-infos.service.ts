import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../../../core/models/api/card/card.model';

@Injectable({
  providedIn: 'root',
})
export class GetInfosService {
  #http = inject(HttpClient);

  getInfos(): Observable<Card> {
    return this.#http.get<Card>(environment.API_URL).pipe(
      map(result => {
        return result;
      })
    );
  }
}
