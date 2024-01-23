import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [CommonModule],
  exports: [CursosRoutingModule, CursosComponent, CursoDetalheComponent],
})
export class CursosModule {}
