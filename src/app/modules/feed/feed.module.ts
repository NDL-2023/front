import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { FeedRoutingModule } from './feed-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardComponent } from './components/card/card.component';
import { BackgroundAnimatedComponent } from './components/background-animated/background-animated.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    FeedPageComponent,
    CardComponent,
    SearchBarComponent,
    BackgroundAnimatedComponent,
  ],
  imports: [CommonModule, FeedRoutingModule, SharedModule, TranslocoModule],
})
export class FeedModule {}
