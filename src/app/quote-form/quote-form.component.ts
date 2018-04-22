import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import  {Quote} from "../quote"
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() emitQuote= new EventEmitter(); 
  publisher:string
  quote:string
  quoteAuthor: string
  myQuote:any

  submitQuote(){
    this.myQuote = new Quote(this.quote,this.publisher,this.quoteAuthor)
    this.emitQuote.emit(this.myQuote)
  } 
  
  btnSubmit: string = ' submit';

  constructor() { }

  ngOnInit() {
  }

}
