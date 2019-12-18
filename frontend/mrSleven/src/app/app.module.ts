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
         MatIconModule,
         MatListModule,
         MatSidenavModule,
         MatCheckboxModule,
         MatDividerModule } from '@angular/material';

import { FormsModule } from '@angular/forms';

/* Pages */
import { LandingPageAppComponent } from './pages/public/landingPage/landing.component';
import { AboutPageComponent } from './pages/public/aboutPage/about.component';
import { LoginPageComponent } from './pages/public/loginPage/login.component';
import { GalleryPageComponent } from './pages/public/galleryPage/galleryPage.component';
import { ContactPageComponent } from './pages/public/contactPage/contactPage.component';

/* Admin Pages */
import { AdminHomePageComponent } from './pages/admin/adminHomePage/adminHomePage.component';
import { AdminUserPageComponent } from './pages/admin/adminUserPage/adminUserPage.component';

/* Components */
import { LoginAppComponent } from './components/public/loginComponent/login.component';
import { NavigationAppComponent } from './components/public/navigationComponent/navigation.component';
import { AboutTextComponent } from './components/public/aboutTextComponent/aboutText.component';
import { SocialComponent } from './components/public/socialComponent/social.component';
import { GalleryComponent } from './components/public/galleryComponent/gallery.component';
import { ContactFormComponent } from './components/public/contactFormComponent/contactForm.component';
import { RegisterComponent } from './components/admin/registerUserComponent/register.component';
import { SideNavigationComponent } from './components/admin/sideNavComponent/sideNav.component';
import { UserLoggedInComponent } from './components/public/userLoggedInComponent/userLoggedIn.Component';


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
    AdminUserPageComponent,
    UserLoggedInComponent,
    RegisterComponent,
    SideNavigationComponent
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
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    NgxGalleryModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
