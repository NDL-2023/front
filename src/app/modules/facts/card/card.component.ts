import { Component, Input } from '@angular/core';
import { BaseAppComponent } from '../../../core/components/base-app/base-app.component';
import { Card, CardType } from '../../../core/models/api/card/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent extends BaseAppComponent {
  @Input() card!: Card;
  cardType = CardType;
}
