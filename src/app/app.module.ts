import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { SpermatozoaComponent } from './spermatozoa/spermatozoa.component';



@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    SpermatozoaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
