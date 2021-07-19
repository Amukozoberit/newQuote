export class QuoteClass {
    public showDescription:boolean;
     public initialVote:number;
     public downVote:number;
      public readonly currentTime:Date=new Date();
     public bgImg:any;
  
     constructor(public textQuote?:string,public name?:string,public author?:string, public date?:Date, public bg?:any){
        this.initialVote=0;
        this.downVote=0;
        this.bgImg=false;
        this.showDescription=false;
        if(bg===undefined){
     this.bg='assets/images/bg7.jpeg'}
    
        if(date===undefined){
          this.date=new Date();
          // console.log(this.date);
        }
       
        this.bgImg=['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fquote%2Bbackground&psig=AOvVaw03MDAXt1-clstPlDgFr8p4&ust=1626546484143000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMC5goOc6PECFQAAAAAdAAAAABAD','https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fcollections%2F637305%2Fbackground-for-quotes&psig=AOvVaw03MDAXt1-clstPlDgFr8p4&ust=1626546484143000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMC5goOc6PECFQAAAAAdAAAAABAI','https://www.google.com/url?sa=i&url=https%3A%2F%2Fbaxcompany.com%2Fenergy_funding%2Fbackground-quotes%2F&psig=AOvVaw03MDAXt1-clstPlDgFr8p4&ust=1626546484143000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMC5goOc6PECFQAAAAAdAAAAABAO','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F760615824545986272%2F&psig=AOvVaw03MDAXt1-clstPlDgFr8p4&ust=1626546484143000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMC5goOc6PECFQAAAAAdAAAAABAU','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fquote%2Bbackground&psig=AOvVaw03MDAXt1-clstPlDgFr8p4&ust=1626546484143000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMC5goOc6PECFQAAAAAdAAAAABAa'];
      
     }
    
 }
 