import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { StringsAndArrayComponent } from './strings-and-array/strings-and-array.component';
import { SetupAndTeardownComponentComponent } from './setup-and-teardown-component/setup-and-teardown-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    StringsAndArrayComponent,
    SetupAndTeardownComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
