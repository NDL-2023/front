import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IFact {
  title: string;
  desc: string;
}

@Injectable({
  providedIn: 'root'
})
export class GetInfosService {
  #http = inject(HttpClient);


  getInfos(): Observable<IFact> {
    return this.#http.get<IFact>(environment.API_URL).pipe(
      map((result) => {
        return result;
      })
    );
  }
}
