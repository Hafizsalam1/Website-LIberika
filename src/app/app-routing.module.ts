import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HocComponent } from 'src/component/hoc/hoc.component';
import { AboutComponent } from 'src/pages/about/about.component';
import { KaleidoskopComponent } from 'src/pages/kaleidoskop/kaleidoskop.component';
import { LandingPageComponent } from 'src/pages/landing-page/landing-page.component';
import { NewsDetailComponent } from 'src/pages/news-detail/news-detail.component';
import { ProgramDetailComponent } from 'src/pages/program-detail/program-detail.component';
import { ProgramsComponent } from 'src/pages/programs/programs.component';

const routes: Routes = [
{path:'', redirectTo: '/home', pathMatch: 'full'},
{path:'home', component: HocComponent},
// {path:'about', component: AboutComponent},
// {path:'program', component: ProgramsComponent},
{path: 'program-detail/:name', component: ProgramDetailComponent},
{path: 'news-detail/kaleidoskop', component: KaleidoskopComponent},
{ path: 'news-detail', component: NewsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
