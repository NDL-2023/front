import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { AddCardComponent } from './add-card/add-card.component';

const routes: Routes = [
  {
    path: 'profile',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProfilePageComponent,
      },
      {
        path: 'add-card',
        component: AddCardComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
