import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { QuoteClass } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:QuoteClass=new QuoteClass("","",""); 
  @Output() isComplete=new EventEmitter<boolean>();
   @Output() comp=new EventEmitter<boolean>();

   
   delete(i:boolean){
    this.isComplete.emit(i);
    alert("heard");

  }
  addLinks(i:boolean){

    if(i===true){
    this.comp.emit(i);
    }else{
      this.comp.emit(i);
    }
      }
  constructor() { }

  ngOnInit(): void {
  }

}
