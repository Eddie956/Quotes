import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  counter:number= 0 
  quotes = [
    new Quote('If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn’t matter a damn how you write.', 'Somerset',"Iam")]
 
    publishQuote(myQuote){
      this.quotes.push(myQuote)
    }
    
  constructor() {

    
    console.log(this.quotes)
   }
   upvote(i){
     this.quotes[i].upvote +=1
   }
  downvote(i) {
    this.quotes[i].downvote += 1
  }
  delete(i) {
    this.quotes.splice(i,1)
  }
  
  ngOnInit() {
  }

}
