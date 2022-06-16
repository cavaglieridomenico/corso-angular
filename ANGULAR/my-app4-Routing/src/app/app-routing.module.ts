import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGardService } from './auth-gard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
//Nell'array specifico le rotte
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:nome', component: UserComponent }],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'servers',
    //canActivate: [AuthGardService],
    canActivateChild: [AuthGardService],
    component: ServersComponent,
    children: [
      // { path: 'server', component: ServerComponent },
      // { path: 'edit', component: EditServerComponent },
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  //Not found - Sempre al fondo
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
