import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SharedModule } from '../../shared/shared.module';
import { UserRoutingModule } from './user.module-routing.module';
import { TranslocoModule } from '@ngneat/transloco';
import { AddCardComponent } from './add-card/add-card.component';

@NgModule({
  declarations: [ProfilePageComponent, AddCardComponent],
  imports: [CommonModule, SharedModule, UserRoutingModule, TranslocoModule],
})
export class UserModule {}
