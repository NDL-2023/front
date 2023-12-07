import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactsPageComponent } from './facts-page/facts-page.component';

const routes: Routes = [{ path: '', component: FactsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactsRoutingModule {}
