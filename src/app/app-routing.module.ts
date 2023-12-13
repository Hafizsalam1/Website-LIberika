import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/pages/about/about.component';
import { LandingPageComponent } from 'src/pages/landing-page/landing-page.component';

const routes: Routes = [
{path:'', redirectTo: '/home', pathMatch: 'full'},
{path:'home', component: LandingPageComponent},
{path:'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
