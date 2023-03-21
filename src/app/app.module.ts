import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './components/produit/produit.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SharedComponent } from './components/shared/shared.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    AuthentificationComponent,
    DashbordComponent,
    HomeComponent,
    MenuComponent,
    SharedComponent,
    UserComponent,
    NavbarComponent,
    ContentComponent,
    SideNavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
