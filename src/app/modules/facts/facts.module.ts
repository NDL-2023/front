import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactsPageComponent } from './facts-page/facts-page.component';
import { FactsRoutingModule } from './facts-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [FactsPageComponent],
  imports: [CommonModule, FactsRoutingModule, SharedModule],
})
export class FactsModule {}
