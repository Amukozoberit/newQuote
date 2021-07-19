import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  @Output() addQuote=new EventEmitter<QuoteClass>();

  newQuote:QuoteClass=new QuoteClass("","","");
  onSubmit(x:any){
       this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
