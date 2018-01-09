import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { ListDetailsComponent } from './list-details/list-details.component';

const routes: Routes = [
  { path: 'lists', component: ListsComponent },
  { path: 'list-details/:id', component: ListDetailsComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
