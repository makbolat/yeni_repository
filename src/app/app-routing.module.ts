import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './Users/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { UserMainComponent } from './Users/user-main/user-main.component';
import { RolSecimiComponent } from './Users/rol-secimi/rol-secimi.component';
import { MenuLinkTanimComponent } from './Users/menu-link-tanim/menu-link-tanim.component';
import { HesapKitapMainComponent } from './hesap-kitap/hesap-kitap-main/hesap-kitap-main.component';
import { HesapDurumComponent } from './hesap-kitap/hesap-durum/hesap-durum.component';
import { PortfoyDurumComponent } from './hesap-kitap/portfoy-durum/portfoy-durum.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'rol-secimi', component: RolSecimiComponent },
  {
    path: 'users',
    component: UserMainComponent,
    children: [
      {
        path: 'menu-link-tanim', // child route path
        component: MenuLinkTanimComponent, // child route component that the router renders
      },
    ],
  },
  {
    path: 'hesap-kitap',
    component: HesapKitapMainComponent,
    children: [
      {
        path: 'hesap-durum', // child route path
        component: HesapDurumComponent, // child route component that the router renders
      },
      {
        path: 'portfoy-durum', // child route path
        component: PortfoyDurumComponent, // child route component that the router renders
      },
    ],
  },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
