import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from 'ngx-gallery';

import { MatFormFieldModule,
         MatInputModule,
         MatCardModule,
         MatMenuModule,
         MatButtonModule,
         MatToolbarModule,
         MatIconModule } from '@angular/material';

import { FormsModule } from '@angular/forms';

/* Pages */
import { LandingPageAppComponent } from './pages/landingPage/landingpage.component';
import { AboutPageComponent } from './pages/aboutPage/about.component';
import { LoginPageComponent } from './pages/loginPage/login.component';
import { GalleryPageComponent } from './pages/galleryPage/galleryPage.component';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';

/* Admin Pages */
import { AdminHomePageComponent } from './pages/admin/adminHomePage/adminHomePage.component';

/* Components */
import { LoginAppComponent } from './components/loginComponent/login.component';
import { NavigationAppComponent } from './components/navigationComponent/navigation.component';
import { AboutTextComponent } from './components/aboutTextComponent/aboutText.component';
import { SocialComponent } from './components/socialComponent/social.component';
import { GalleryComponent } from './components/galleryComponent/gallery.component';
import { ContactFormComponent } from './components/contactFormComponent/contactForm.component';
import { RegisterComponent } from './components/admin/registerUserComponent/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageAppComponent,
    AboutPageComponent,
    LoginPageComponent,
    LoginAppComponent,
    GalleryPageComponent,
    NavigationAppComponent,
    AboutTextComponent,
    ContactPageComponent,
    SocialComponent,
    GalleryComponent,
    ContactFormComponent,
    AdminHomePageComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    NgxGalleryModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
