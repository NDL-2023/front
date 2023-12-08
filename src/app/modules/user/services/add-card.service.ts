import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Card } from 'src/app/core/models/api/card/card.model';
import { ToastLevel } from 'src/app/core/models/toast-level';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { getErrorMessage } from 'src/app/core/utils/errors.utils';
import { environment } from 'src/environments/environment';

export interface IAddCard {

}

@Injectable({
  providedIn: 'root'
})
export class AddCardService {
  #http = inject(HttpClient);
  #toastService = inject(ToastService);

  addCard(card: IAddCard): Observable<boolean> {
    return this.#http.post(`${environment.API_URL}/cards/create`,
      card
    ).pipe(
      map( r => {
        return true;
      }),
      catchError(err => {
        this.#toastService.Show(getErrorMessage(err), ToastLevel.Error);
        return of(false);
      }),
    );
  }
}
