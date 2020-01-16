import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Page Components */
import { LandingPageAppComponent } from './pages/public/landingPage/landing.component';
import { AboutPageComponent } from './pages/public/aboutPage/about.component';
import { LoginPageComponent } from './pages/public/loginPage/login.component';
import { GalleryPageComponent } from './pages/public/galleryPage/galleryPage.component';
import { ContactPageComponent } from './pages/public/contactPage/contactPage.component';
import { AdminGalleryPageComponent } from './pages/admin/adminGalleryPage/adminGalleryPage.component';

/* Admin Components */
import { AdminHomePageComponent } from './pages/admin/adminHomePage/adminHomePage.component';
import { AdminUserPageComponent } from './pages/admin/adminUserPage/adminUserPage.component';
import { AdminAboutComponent } from './pages/admin/adminAboutPage/adminAbout.component';

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
  },
  {
    path: 'admin/user',
    component: AdminUserPageComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'admin/about',
    component: AdminAboutComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'admin/gallery',
    component: AdminGalleryPageComponent
    // canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService],
})

export class AppRoutingModule { }
