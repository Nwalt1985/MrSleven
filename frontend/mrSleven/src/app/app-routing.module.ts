import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Custom Components */
import { LandingPageAppComponent } from './pages/landingPage/landingpage.component';
import { HomeAppComponent } from './pages/homePage/home.component';
import { AboutAppComponent } from './pages/aboutPage/about.component';
import { AdminAppComponent } from './pages/adminPage/admin.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageAppComponent
  },
  {
    path: 'home',
    component: HomeAppComponent
  },
  {
    path: 'about',
    component: AboutAppComponent
  },
  {
    path: 'admin',
    component: AdminAppComponent
  },
  {
    path: '**',
    component: LandingPageAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
