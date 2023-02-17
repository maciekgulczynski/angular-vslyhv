import { Component, NgModule } from "@angular/core";
import { BrowserModule, platformBrowser } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";


@Component({
  selector: 'joke',
  template: `<h1>{{setup}}</h1>
              <p>{{punchline}}</p>`
})

class JokeComponent {
  setup: string;
  punchline: string;

  constructor(){
    this.setup = "What did the cheese say when it looked in the mirror?",
    this.punchline = "Halloumi (Hello Me)"
  }
 
}

@Component({
  selector: 'joke-list',
  template: `
<div class ="card card-block"
  *ngFor="let joke of jokes">
  <h4 class="card-title">{{joke.setup}}</h4>
  <p class="card-text">{{joke.punchline}}</p>
</div> `
})

class JokeListComponent{
  jokes: Object[];


  constructor() {
  this.jokes = [
  {
    setup: "What did the cheese say when it looked in the mirror?",
    punchline: "Hello-Me (Halloumi)"
  },
  {
    setup: "What kind of cheese do you use to disguise a small horse?",
    punchline: "Mask-a-pony (Mascarpone)"
  },
  {
    setup: "A kid threw a lump of cheddar at me",
    punchline: "I thought ‘That’s not very mature’"
  },
  ]

} 






@NgModule({
  imports:[BrowserModule],
  declarations:[JokeComponent, JokeListComponent],
  bootstrap: [JokeListComponent]
})
class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);