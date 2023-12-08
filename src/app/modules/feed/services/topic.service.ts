import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Topic } from '../../../core/models/api/topic.model';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  #http = inject(HttpClient);

  getTopic(id: number): Observable<Topic> {
    // return this.#http.get<Topic>(environment.API_URL + '/topic/' + id).pipe(
    //   map(result => {
    //     return result;
    //   })
    // );
    let t: Topic = {
      id: 1,
      title: 'I have a very Important question !',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquet nisl nunc eu justo.',
      author: {
        id: 1,
        username: 'baobnioa',
      },
      replies: [
        {
          id: 1,
          content: 'content',
          author: {
            id: 2,
            username: 'random',
          },
        },
        {
          id: 1,
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies ultricies, nunc nisl aliquam nunc, vitae aliquet nisl nunc eu justo.',
          author: {
            id: 2,
            username: 'random',
          },
        },
      ],
    };
    return of(t);
  }
}
