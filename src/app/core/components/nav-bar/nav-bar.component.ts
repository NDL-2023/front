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
  ind = 0;
  availableLangs: string[] = ['fr', 'en', 'sv', 'de'];
  currentLocale = this.availableLangs[this.ind];
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
    if (this.ind < this.availableLangs.length -1) {
      this.ind += 1;
    } else {
      this.ind = 0;
    }
    this.currentLocale = this.availableLangs[this.ind];
    this.translocoService.setActiveLang(this.currentLocale);
  }
}
