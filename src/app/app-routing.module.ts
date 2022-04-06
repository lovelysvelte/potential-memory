import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard'
const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
 { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
