import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchStatiComponent } from './search-stati/search-stati.component';
import { ItemStatiComponent } from './item-stati/item-stati.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchStatiComponent,
    ItemStatiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
