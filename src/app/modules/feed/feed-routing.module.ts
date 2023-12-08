import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedPageComponent } from './feed-page/feed-page.component';

const routes: Routes = [
  { path: '', component: FeedPageComponent },
  {
    path: 'topic/:id',
    pathMatch: 'full',
    loadChildren: () => import('./topic/topic.module').then(m => m.TopicModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRoutingModule {}
