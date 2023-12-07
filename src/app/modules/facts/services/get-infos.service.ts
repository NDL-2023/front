import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface IFact {
  title: string;
  desc: string;
}

@Injectable({
  providedIn: 'root'
})
export class GetInfosService {
  #http = inject(HttpClient);


  apiUrl = 'localhost:3000/api';



  getInfos(): Observable<IFact> {
    return this.#http.get<IFact>(apiUrl).pipe(
      map((result) => {
        return result;
      })
    );
  }
}
