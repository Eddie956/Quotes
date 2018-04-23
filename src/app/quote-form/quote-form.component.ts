import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import  {Quote} from "../quote"
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() emitQuote=new  EventEmitter()
  itemCount:number;
  btnText: string='Add a Quote';
  nameText: string = '' 
  quoteText: string = '' 
  authorText: string='' 
  myQuote:any

  constructor() { }

  ngOnInit() {
  }
  submitQuote(){
    this.myQuote = new Quote(this.quoteText, this.nameText, this.authorText)
    this.nameText = ''
    this.quoteText = ''
    this.authorText = '' 
    this.emitQuote.emit(this.myQuote)

  }
}
