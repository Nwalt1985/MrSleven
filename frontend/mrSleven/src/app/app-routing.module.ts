import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Custom Components */
import { LandingPageAppComponent } from './pages/landingPage/landingpage.component';
import { AboutPageComponent } from './pages/aboutPage/about.component';
import { AdminPageComponent } from './pages/adminPage/admin.component';
import { GalleryPageComponent } from './pages/galleryPage/galleryPage.component';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';

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
    path: 'admin',
    component: AdminPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
