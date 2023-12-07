import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';

@NgModule({
  declarations: [HomePageComponent, HeroBannerComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
