import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemCount: number;
  btnText: string = 'Add a Quote';
  nameText: string = ''
  quoteText: string = ''
  authorText: string = ''
  quotes = [];
  
  addItem() {
    this.quotes.push(this.nameText, this.quoteText, this.authorText);
    this.nameText = ''
    this.quoteText = ''
    this.authorText = ''
    this.itemCount = this.quotes.length;
  }
 
}
