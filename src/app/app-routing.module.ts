import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoLogeadoGuard } from './no-logeado.guard';
import { LogeadoGuard } from './logeado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [LogeadoGuard]
    
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'galeria',
    loadChildren: () => import('./galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'galeria2',
    loadChildren: () => import('./galeria2/galeria2.module').then( m => m.Galeria2PageModule)
  },
  {
    path: 'galeria3',
    loadChildren: () => import('./galeria3/galeria3.module').then( m => m.Galeria3PageModule)
  },
  {
    path: 'oferta',
    loadChildren: () => import('./oferta/oferta.module').then( m => m.OfertaPageModule)
  },
  {
    path: 'galeriaf1',
    loadChildren: () => import('./galeriaf1/galeriaf1.module').then( m => m.Galeriaf1PageModule)
  },
  {
    path: 'galeriaf2',
    loadChildren: () => import('./galeriaf2/galeriaf2.module').then( m => m.Galeriaf2PageModule)
  },
  {
    path: 'galeriaf3',
    loadChildren: () => import('./galeriaf3/galeriaf3.module').then( m => m.Galeriaf3PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [LogeadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [LogeadoGuard]
  },
  {
    path: 'reserva',
    loadChildren: () => import('./reserva/reserva.module').then( m => m.ReservaPageModule)
  },
  {
    path: 'apii',
    loadChildren: () => import('./apii/apii.module').then( m => m.ApiiPageModule)
  },
  {
    path: 'cajacoment',
    loadChildren: () => import('./cajacoment/cajacoment.module').then( m => m.CajacomentPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
