import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from '../component/footer/footer.component';
import { LandingPageComponent } from 'src/pages/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/component/header/header.component';
import { AboutComponent } from '../pages/about/about.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ProgramsComponent } from 'src/pages/programs/programs.component';
import { ProgramDetailComponent } from 'src/pages/program-detail/program-detail.component';
import { HocComponent } from 'src/component/hoc/hoc.component';
import { NewsComponent } from 'src/pages/news/news.component';
import { NewsDetailComponent } from 'src/pages/news-detail/news-detail.component';

export function playerFactory(): any {  
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    ProgramsComponent,
    ProgramDetailComponent,
    HocComponent,
    FooterComponent,
    NewsComponent,
    NewsDetailComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
