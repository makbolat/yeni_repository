import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Users/login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { MenuComponent } from './Users/menu/menu.component';
import { UserMainComponent } from './Users/user-main/user-main.component';
import { RolSecimiComponent } from './Users/rol-secimi/rol-secimi.component';
import { MenuLinkTanimComponent } from './Users/menu-link-tanim/menu-link-tanim.component';
import { HesapDurumComponent } from './hesap-kitap/hesap-durum/hesap-durum.component';
import { PortfoyDurumComponent } from './hesap-kitap/portfoy-durum/portfoy-durum.component';
import { OptionsComponent } from './hesap-kitap/options/options.component';
import { HesapKitapMainComponent } from './hesap-kitap/hesap-kitap-main/hesap-kitap-main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    MenuComponent,
    UserMainComponent,
    RolSecimiComponent,
    MenuLinkTanimComponent,
    HesapDurumComponent,
    PortfoyDurumComponent,
    OptionsComponent,
    HesapKitapMainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
