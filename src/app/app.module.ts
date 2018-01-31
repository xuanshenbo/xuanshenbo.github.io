import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeModule } from './pages/about-me/about-me';
import { ComponentPageTitle } from './pages/page-title/page-title';
import { AppMaterialModule } from './material.module';
import { FooterModule } from './shared/footer/footer';
import { NavBarModule } from './shared/navbar';
import { ROUTES } from './routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AboutMeModule,
    AppMaterialModule,
    FooterModule,
    NavBarModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [ComponentPageTitle],
  bootstrap: [AppComponent]
})

export class AppModule { }
