import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddCardService } from '../services/add-card.service';
import { Router } from '@angular/router';
import { ToastComponent } from 'src/app/core/components/toast/toast.component';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { translate } from '@ngneat/transloco';
import { ToastLevel } from 'src/app/core/models/toast-level';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent {
  #fb = inject(FormBuilder);
  #addCardService = inject(AddCardService);
  #router = inject(Router);
  #toastService = inject(ToastService);

  card = this.#fb.group({
    title: this.#fb.group({
      fr: ['', Validators.required],
      en: ['', Validators.required],
    }),
    content: this.#fb.group({
      fr: ['', Validators.required],
      en: ['', Validators.required], 
    }),
    type: ['fact', Validators.required],
    isTrue: [''],
    explanation: this.#fb.group({
      fr: [''],
      en: [''],
    })
  });


  submit() {
    if(this.card.invalid) {
      this.#toastService.Show(translate('user.add-card-form-invalid'), ToastLevel.Error);
      return;
    }

    this.#addCardService.addCard(this.card.value).subscribe(
      r => {
        this.#router.navigate([ '/', 'feed']);
      }
    );
  }
}
