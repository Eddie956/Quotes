import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  counter:number= 0 
  newQuote = [
    new Quote(this.counter++, 'If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn’t matter a damn how you write.', 'Somerset', 90, 10,  new Date()),
    new Quote(this.counter++, 'To produce a mighty book, you must choose a mighty theme', 'Herman', 90, 2,  new Date()),
    new Quote(this.counter++, 'It took me fifteen years to discover I had no talent for writing, but I couldn’t give it up because by that time I was too famous.', ' Robert ', 90, 10, new Date()),
    new Quote(this.counter++, 'Any man who keeps working is not a failure. He may not be a great writer, but if he applies the old-fashioned virtues of hard, constant labor, he’ll eventually make some kind of career for himself as writer.', 'Ray', 90, 10, new Date()),
    new Quote(this.counter++, 'If you have other things in your life—family, friends, good productive day work—these can interact with your writing and the sum will be all the richer.', 'David', 90, 10, new Date()),
    new Quote(this.counter++, 'My own experience is that once a story has been written, one has to cross out the beginning and the end. It is there that we authors do most of our lying.', 'Anton', 90, 10, new Date()),
    new Quote(this.counter++, 'I have been successful probably because I have always realized that I knew nothing about writing and have merely tried to tell an interesting story entertainingly.', 'Rice', 90, 10, new Date()),
    new Quote(this.counter++, 'A writer without interest or sympathy for the foibles of his fellow man is not conceivable as a writer.', 'Robert', 90, 10, new Date()),
    new Quote(this.counter++, 'Science fiction writers, I am sorry to say, really do not know anything.', 'Philip', 90, 10, new Date()),
    new Quote(this.counter++, 'Words are a lens to focus one’s mind.', 'Rand', 90, 10, new Date()),
  ]
  constructor() {
    console.log(this.newQuote)
   }
 
  ngOnInit() {
  }

}
