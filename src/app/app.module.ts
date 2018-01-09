import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import {TaskService} from './task.service';
import {ListService} from './list.service';
import { ListsComponent } from './lists/lists.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListDetailsComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TaskService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
