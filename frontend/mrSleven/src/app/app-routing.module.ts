import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Custom Components */
import { LandingPageAppComponent } from './pages/landingPage/landingpage.component';
import { AboutPageComponent } from './pages/aboutPage/about.component';
import { LoginPageComponent } from './pages/loginPage/login.component';
import { GalleryPageComponent } from './pages/galleryPage/galleryPage.component';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';

/* Admin Components */
import { AdminHomePageComponent } from './pages/admin/adminHomePage/adminHomePage.component';

/* Authentication for admin pages */
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LandingPageAppComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'gallery',
    component: GalleryPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'admin/home',
    component: AdminHomePageComponent,
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuardService],
})

export class AppRoutingModule { }
