import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { TopicPageComponent } from './topic-page/topic-page.component';
import { TopicRoutingModule } from './topic-routing.module';
import { MessageComponent } from './message/message.component';
import { SvgForestComponent } from './svg-forest/svg-forest.component';

@NgModule({
  declarations: [TopicPageComponent, MessageComponent, SvgForestComponent],
  imports: [CommonModule, TopicRoutingModule, SharedModule],
})
export class TopicModule {}
