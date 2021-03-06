import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DateCountPipe } from './date-count.pipe';
import { HightlightBestDirective } from './hightlight-best.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteCardComponent,
    QuotesFormComponent,
    QuoteDetailsComponent,
    DateCountPipe,
    HightlightBestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
