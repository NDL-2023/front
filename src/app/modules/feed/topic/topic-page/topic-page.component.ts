import { Component, Input, OnInit } from '@angular/core';
import { BaseAppComponent } from '../../../../core/components/base-app/base-app.component';
import { ActivatedRoute } from '@angular/router';
import { Topic } from '../../../../core/models/api/topic.model';
import { TopicService } from '../../services/topic.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.scss'],
})
export class TopicPageComponent extends BaseAppComponent implements OnInit {
  topicId!: number;
  topic!: Topic;
  reply: string = '';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly topicService: TopicService
  ) {
    super();
  }

  ngOnInit(): void {
    this.topicId = this.activatedRoute.snapshot.params['id'];
    this.topicService
      .getTopic(this.topicId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.topic = { ...res.topic, replies: res.reply };
      });
  }

  handleNewReply() {
    this.topicService
      .replyTopic(this.topicId, this.reply)
      .pipe(takeUntil(this.destroy$))
      .subscribe(topic => {
        this.reply = '';
      });
  }
}
