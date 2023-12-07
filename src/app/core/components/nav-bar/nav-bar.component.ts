import { TranslocoService } from "@ngneat/transloco";
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { BaseAppComponent } from '../base-app/base-app.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent extends BaseAppComponent {
  currentLocale = 'fr';
  //isConnected = false;
  //use AuthentificationService to get the current user
  phoneMenuOpen = false;
  constructor(public readonly authService: AuthService, private translocoService: TranslocoService) {
    super();
  }

  get currentFlagIcon() {
    return `assets/icons/${this.currentLocale}.svg`;
  }

  switchLanguage() {
    this.currentLocale = this.currentLocale == 'fr' ? 'en' : 'fr';
    this.translocoService.setActiveLang(this.currentLocale);
  }
}
