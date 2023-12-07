import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactsPageComponent } from './facts-page/facts-page.component';
import { FactsRoutingModule } from './facts-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardComponent } from './components/card/card.component';
import { BackgroundAnimatedComponent } from './components/background-animated/background-animated.component';

@NgModule({
  declarations: [FactsPageComponent, CardComponent, SearchBarComponent, BackgroundAnimatedComponent],
  imports: [CommonModule, FactsRoutingModule, SharedModule],
})
export class FactsModule {}
