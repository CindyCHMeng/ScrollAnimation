import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScrollAnimationComponent } from './scroll-animation/scroll-animation.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ScrollAnimationComponent },
    ])
  ],
  declarations: [
    AppComponent,
    ScrollAnimationComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
