import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { LoginComponent } from './authentication/login/login.component';
import { IntroductionComponent } from './template/introduction/introduction.component';
import { ContentComponent } from './template/content/content.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './template/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    IntroductionComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
