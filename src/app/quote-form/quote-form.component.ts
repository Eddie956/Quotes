import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import  {Quote} from "../quote"
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  itemCount:number;
  btnText: string='Add a Quote';
  nameText: string = '' 
  quoteText: string = '' 
  authorText: string='' 
  quotes = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.quotes.length;
  }
  addItem(){
    this.quotes.push(this.nameText, this.quoteText, this.authorText);
    this.nameText = ''
    this.quoteText = ''
    this.authorText = '' 
    this.itemCount = this.quotes.length;
  }
}
