import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../../../core/models/api/card/card.model';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root',
})
export class GetInfosService {
  #http = inject(HttpClient);

  getInfos(page: number, lang: string): Observable<Card[]> {
    return this.#http.get<Card[]>(`${environment.API_URL}/cards/page?page=${page}&lang=${lang}`).pipe(
      map(result => {
        return result;
      })
    );
  }
}
