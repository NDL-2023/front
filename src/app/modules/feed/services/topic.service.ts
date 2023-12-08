import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of, take, takeUntil } from 'rxjs';
import { Topic, TopicDto } from '../../../core/models/api/topic.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  #http = inject(HttpClient);

  getTopic(id: number): Observable<Topic> {
    return this.#http
      .get<Topic>(environment.API_URL + '/topic/' + id)
      .pipe(take(1));
  }

  createTopic(topicDto: TopicDto): Observable<Topic> {
    return this.#http
      .post<Topic>(environment.API_URL + '/topic/create', topicDto)
      .pipe(take(1));
  }
}
