import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './modules/about/about/about.component';
import { CursoDetalheComponent } from './modules/cursos/curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './modules/cursos/cursos.component';
import { HomeComponent } from './modules/home/home/home.component';
import { ProfileComponent } from './modules/profile/profile/profile.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'cursos',
  // },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'cursos',
    component: CursosComponent,
    loadChildren: () =>
      import('./modules/cursos/cursos.module').then((m) => m.CursosModule),
  },
  {
    path: 'cursos/:id',
    component: CursoDetalheComponent,
    loadChildren: () =>
      import('./modules/cursos/cursos.module').then((m) => m.CursosModule),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'about',
    component: AboutComponent,
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
