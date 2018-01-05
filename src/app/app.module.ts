import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import {TaskService} from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    ListDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
