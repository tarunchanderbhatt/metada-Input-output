import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetaComponent } from './meta/meta.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MetaComponent,
    EncapsulationComponent,
    ParentComponent,
    ChildComponent,
    GrandChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
