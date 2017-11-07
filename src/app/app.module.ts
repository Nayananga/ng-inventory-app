import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './store';
import { AppComponent } from './app.component';

import { CoreModule } from './core';
import { SharedModule } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    AppStoreModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
