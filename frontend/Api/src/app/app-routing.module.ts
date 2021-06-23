import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { carGuard } from './pages/phones/phone.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'car', loadChildren: () => import('./pages/phones/phone.module').then(m => m.carsModule), canActivate: [carGuard]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
