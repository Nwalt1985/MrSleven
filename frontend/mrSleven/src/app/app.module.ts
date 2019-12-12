import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";

/* Pages */
import { LandingPageAppComponent } from './pages/landingPage/landingpage.component';
import { HomeAppComponent } from './pages/homePage/home.component';
import { AboutAppComponent } from './pages/aboutPage/about.component';
import { AdminAppComponent } from './pages/adminPage/admin.component';

/* Components */
import { LoginAppComponent } from './components/loginComponent/login.component';
import { NavigationAppComponent } from './components/navigationComponent/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageAppComponent,
    HomeAppComponent,
    AboutAppComponent,
    AdminAppComponent,
    LoginAppComponent,
    NavigationAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
