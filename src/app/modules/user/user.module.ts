import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SharedModule } from '../../shared/shared.module';
import { UserRoutingModule } from './user.module-routing.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [CommonModule, SharedModule, UserRoutingModule, TranslocoModule],
})
export class UserModule {}
