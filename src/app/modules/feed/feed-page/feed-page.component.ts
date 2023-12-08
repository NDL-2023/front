import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { SearchFactsService } from '../services/search-facts.service';
import { Card, CardType } from '../../../core/models/api/card/card.model';
import { GetInfosService } from '../services/get-infos.service';
import { TranslocoService } from '@ngneat/transloco';
import { fromEvent, takeUntil } from 'rxjs';
import { ModalService } from '../../../core/services/modal/modal.service';
import { NewTopicModalComponent } from '../components/new-topic-modal/new-topic-modal.component';
import { BaseAppComponent } from '../../../core/components/base-app/base-app.component';
import { translate } from '@ngneat/transloco';
import { TopicService } from '../services/topic.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss'],
})
export class FeedPageComponent extends BaseAppComponent implements OnInit, AfterViewInit {
  #searchFactsService = inject(SearchFactsService);
  #getInfosService = inject(GetInfosService);
  #translocoService = inject(TranslocoService)
  #modalService = inject(ModalService);
  #topicService = inject(TopicService);

  handleSearch(search: string) {
    this.#searchFactsService.search(search).subscribe(list => {
      console.log(list);
    });
  }

  @ViewChild('cardSCroll') cardSCroll?: ElementRef<HTMLDivElement>;
  cards: Card[] = [];
  currentPage = 1;
  hasReachedBottom = false;

  ngOnInit(): void {
    this.#translocoService.langChanges$
    .pipe(takeUntil(this.destroy$))
    .subscribe((lang) => {
      this.currentPage = 1;
      this.cards = [];
      this.getNewPage(this.currentPage, lang);
    });

  }

  ngAfterViewInit(): void {
    if(this.cardSCroll) {
      fromEvent(this.cardSCroll.nativeElement, "scroll").subscribe(e => {
        this.cardSCroll!.nativeElement.scroll
        if (this.cardSCroll!.nativeElement.offsetHeight + this.cardSCroll!.nativeElement.scrollTop >= this.cardSCroll!.nativeElement.scrollHeight && !this.hasReachedBottom) {
          this.scrolledToBottom();
        }
      });
    }
  }

  scrolledToBottom() {
    this.hasReachedBottom = true;
    this.currentPage++;
    
  }

  getNewPage(page: number, lang: string) {
    this.#getInfosService.getInfos(page, lang).subscribe((r) => {
      if(r.length != 0) {
        this.cards = this.cards.concat(r);
        this.hasReachedBottom = false;
      }
    });
  }
  handleNewTopic() {
    this.#modalService
      .open(NewTopicModalComponent, {
        title: translate('feed.add-topic.modal-title'),
        cancelText: translate('feed.add-topic.modal-title-cancel'),
        confirmText: translate('feed.add-topic.modal-title-submit'),
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        let topic = {
          title: result.data.title,
          content: result.data.content,
        };
        this.#topicService.createTopic(topic).subscribe(result => {
          console.log(result);
        });
      });
  }

}
