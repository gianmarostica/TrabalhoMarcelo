import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasseComponent } from './Cadastro/classe/classe.component';
import { JogadorComponent } from './Cadastro/jogador/jogador.component';

const routes: Routes = [
  {path: 'classes',component:ClasseComponent},
  {path: 'jogadores',component:JogadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
