import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule,
         MatInputModule,
         MatCardModule,
         MatMenuModule,
         MatButtonModule,
         MatToolbarModule } from '@angular/material';

/* Pages */
import { LandingPageAppComponent } from './pages/landingPage/landingpage.component';
import { HomePageComponent } from './pages/homePage/home.component';
import { AboutPageComponent } from './pages/aboutPage/about.component';
import { AdminPageComponent } from './pages/adminPage/admin.component';
import { GalleryPageComponent } from './pages/galleryPage/galleryPage.component';

/* Components */
import { LoginAppComponent } from './components/loginComponent/login.component';
import { NavigationAppComponent } from './components/navigationComponent/navigation.component';
import { AboutTextComponent } from './components/aboutTextComponent/aboutText.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageAppComponent,
    HomePageComponent,
    AboutPageComponent,
    AdminPageComponent,
    LoginAppComponent,
    GalleryPageComponent,
    NavigationAppComponent,
    AboutTextComponent
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
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
