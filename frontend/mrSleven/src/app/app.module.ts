import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from 'ngx-gallery';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';

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
import { AdminAboutComponent } from './pages/admin/adminAboutPage/adminAbout.component';
import { AdminGalleryPageComponent } from './pages/admin/adminGalleryPage/adminGalleryPage.component';
import { AdminPageContactComponent } from './pages/admin/adminContactPage/adminContact.component';

/* Components */
import { LoginAppComponent } from './components/public/loginComponent/login.component';
import { LogoComponent } from './components/public/logoComponent/logo.component';
import { NavigationAppComponent } from './components/public/navigationComponent/navigation.component';
import { AboutTextComponent } from './components/public/aboutTextComponent/aboutText.component';
import { SocialComponent } from './components/public/socialComponent/social.component';
import { GalleryComponent } from './components/public/galleryComponent/gallery.component';
import { GalleryImageViewComponent } from './components/public/galleryImageViewComponent/imageViewComponent';
import { ContactFormComponent } from './components/public/contactFormComponent/contactForm.component';
import { RegisterComponent } from './components/admin/adminUsers/registerUserComponent/register.component';
import { SideNavigationComponent } from './components/admin/sideNavComponent/sideNav.component';
import { UserLoggedInComponent } from './components/public/userLoggedInComponent/userLoggedIn.Component';
import { DeleteUserComponent } from './components/admin/adminUsers/deleteUserComponent/delete.component';
import { UpdatePasswordComponent } from './components/admin/adminUsers/updatePasswordComponent/updatePass.component';
import { AdminAboutHeaderComponent } from './components/admin/adminAbout/aboutHeader/aboutHeader.component';
import { AdminAboutImageLeftComponent } from './components/admin/adminAbout/aboutImageLeft/aboutImageLeft.component';
import { AdminAboutImageRightComponent } from './components/admin/adminAbout/aboutImageRight/aboutImageRight.component';
import { AdminAboutImageMobileComponent } from './components/admin/adminAbout/aboutImageMobile/aboutImageMobile.component';
import { AdminAboutSignatureComponent } from './components/admin/adminAbout/aboutSignature/aboutSignature.component';
import { AdminAboutTextComponent } from './components/admin/adminAbout/aboutText/aboutText.component';
import { AdminUserVisitsComponent } from './components/admin/adminHome/adminUserVisits/userVisits.component';
import { UpdateEmailAddressComponent } from './components/admin/adminContact/updateEmail/updateEmail.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageAppComponent,
    AboutPageComponent,
    LoginPageComponent,
    LoginAppComponent,
    GalleryPageComponent,
    LogoComponent,
    NavigationAppComponent,
    AboutTextComponent,
    ContactPageComponent,
    SocialComponent,
    GalleryComponent,
    GalleryImageViewComponent,
    ContactFormComponent,
    AdminHomePageComponent,
    AdminUserPageComponent,
    UserLoggedInComponent,
    RegisterComponent,
    SideNavigationComponent,
    DeleteUserComponent,
    UpdatePasswordComponent,
    AdminAboutComponent,
    AdminAboutHeaderComponent,
    AdminAboutImageLeftComponent,
    AdminAboutImageRightComponent,
    AdminAboutImageMobileComponent,
    AdminAboutSignatureComponent,
    AdminAboutTextComponent,
    AdminUserVisitsComponent,
    AdminGalleryPageComponent,
    AdminPageContactComponent,
    UpdateEmailAddressComponent
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
    MatDialogModule,
    MatDividerModule,
    NgxGalleryModule,
    MatCheckboxModule,
    FormsModule
  ],
  entryComponents: [
    GalleryComponent,
    GalleryImageViewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
