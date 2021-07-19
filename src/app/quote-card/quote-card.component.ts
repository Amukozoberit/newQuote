import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent implements OnInit {

 
  quotes:QuoteClass[]=[
    new QuoteClass("If you want to go fast go alone.If you want to go far go together","mwashe berit","Nelson Mandela",new Date(2021,6,17),'assets/images/bg1.jpeg'),
    new QuoteClass("If you want the rainbow you have to put up with the rain","mwashe berit","Camilla crey",new Date("Wed, 17 July 2021 07:45:00 UTC"),'assets/images/bg5.jpeg'),
    new QuoteClass("You will never know the value of a moment until it becomes a memory","mwashe berit","Droly Patron",new Date("Wed, 17 July 2021 01:45:00 UTC"),'assets/images/mem1.jpeg'),
    new QuoteClass("if you find someone you love in your life,then hang on that love","mwashe berit","Princess",new Date(2021,6,17),'assets/images/love.jpeg'),
    new QuoteClass("Stay close to anything that makes you glad you are ALIVE","mwashe berit","HarRez",new Date("Fri,17 July 2021 01:45:00 UTC"),'assets/images/hp.jpeg'),
    new QuoteClass("Intellectual growth should begin at birth and end only at death","mwashe berit","Albert Einstein",new Date("Fri, 18 July 2021 12:45:00 UTC"),'assets/images/bg8.jpeg'),
    new QuoteClass("I like critism it makes you strong","mwashe berit","Lebron James",new Date("Fri, 18 July 2021 12:45:00 UTC"),'assets/images/bg8.jpeg'),
    new QuoteClass("You get what you give","mwashe berit","Jenifer lopez",new Date("Fri, 18 July 2021 12:45:00 UTC"),'assets/images/g2.jpeg'),
  ]
  
  deleteQuote(isComplete:boolean,index:number){
    let toDelete=confirm(`are you sure you want to delete ${this.quotes[index].name}?`)
    if(toDelete){
      this.quotes.splice(index,1);
    }
  }
  toggleDetails(index:number,quote:QuoteClass){
  
    quote.showDescription=!this.quotes[index].showDescription;
  }
  
  editInitialDown(addLinks:boolean,index:number,q:QuoteClass){
   if(addLinks===true){
    q.initialVote++;
  
    this.quotes.splice(index,1, q);
    
   }else{
    q.downVote--;
  
    this.quotes.splice(index,1, q);
   
   }
   
   
   
    
  }
  
  addNewQuote(q:any){
   if(q.name==="" || q.athour===""||q.textQuote===""){
  alert("Empty fields not allowed");
   }
      else{
    let quotesL=this.quotes.length;
    console.log(quotesL);
    q.initialVote=0;
    q.currentTime=new Date();
    this.quotes.push(q);
    console.log(this.quotes);
      }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
