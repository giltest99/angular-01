import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KonkatComponent } from './konkat/konkat.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TitleComponent } from './shared/title/title.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { LabelComponent } from './shared/label/label.component';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KonkatComponent,
    NotFoundComponent,
    TitleComponent,
    NavigationComponent,
    LabelComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
