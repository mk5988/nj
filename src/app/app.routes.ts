import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Pessoa } from './pessoa/pessoa';
import { CadastroEvento } from './pages/cadastro-evento/cadastro-evento';
import { NaoEncontrada } from './nao-encontrada/nao-encontrada';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pessoa', component: Pessoa },
  { path: 'eventos/novo', component: CadastroEvento },
  { path: '**', component: NaoEncontrada }
];
