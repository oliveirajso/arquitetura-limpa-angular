import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';

const cursosRoutes: Routes = [
  {
    path: 'cursos',
    component: CursosComponent,
    loadChildren: () =>
      import('../cursos/cursos.module').then((m) => m.CursosModule),
  },
  {
    path: 'cursos/:id',
    component: CursoDetalheComponent,
    loadChildren: () =>
      import('../cursos/cursos.module').then((m) => m.CursosModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
