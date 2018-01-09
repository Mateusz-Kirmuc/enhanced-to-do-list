import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import {ListService} from './list.service';
import { ListsComponent } from './lists/lists.component';
import { AppRoutingModule } from './/app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListDetailsComponent,
    ListsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
