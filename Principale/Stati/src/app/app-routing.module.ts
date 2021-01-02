import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchStatiComponent } from './search-stati/search-stati.component';
import { ItemStatiComponent } from './item-stati/item-stati.component';
const routes: Routes = [
  { path: 'stato/:id', component:ItemStatiComponent },
  { path: 'search', component: SearchStatiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
