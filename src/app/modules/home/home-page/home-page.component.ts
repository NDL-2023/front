import { Component } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']

})
export class HomePageComponent {
  subscription: Subscription = new Subscription;
  i = 0;
  konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"]
  secret = false;
  ngOnInit() {

    this.subscription = fromEvent<KeyboardEvent>(document, 'keydown').subscribe((e: KeyboardEvent) => {
      if(this.konamiCode[this.i] == e.key){
        this.i++
      }else{
        this.i = 0
      }
      
      if(this.i == this.konamiCode.length){
        this.secret = true
        console.log("ABRACADABRA")
      }
      
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
