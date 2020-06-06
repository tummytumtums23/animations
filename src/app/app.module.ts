import { BrowserModule } from '@angular/platform-browser';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimateComponent } from './animate/animate.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';


@NgModule({
  declarations: [
    AppComponent,
    AnimateComponent,
    SecondPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxImageZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
