import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evento } from '../../models/evento';
import {
  validarData,
  validarEmailResponsavel,
  validarLocal,
  validarTitulo,
  validarVagas,
} from '../../models/evento.validacao';

type CampoEvento = keyof Omit<Evento, 'id'>;

@Component({
  selector: 'app-cadastro-evento',
  imports: [FormsModule],
  styleUrl: './cadastro-evento.css',
  templateUrl: './cadastro-evento.html',
})
export class CadastroEvento {
  evento: Evento = this.criarEventoVazio();
  eventos: Evento[] = [];
  proximoId = 1;
  camposTocados: Partial<Record<CampoEvento, boolean>> = {};

  private criarEventoVazio(): Evento {
    return {
      id: 0,
      titulo: '',
      data: '',
      local: '',
      emailResponsavel: '',
      vagas: null,
    };
  }

  marcarComoTocado(campo: CampoEvento): void {
    this.camposTocados[campo] = true;
  }

  obterMensagemErro(campo: CampoEvento): string | null {
    switch (campo) {
      case 'titulo':
        return validarTitulo(this.evento.titulo);
      case 'data':
        return validarData(this.evento.data);
      case 'local':
        return validarLocal(this.evento.local);
      case 'emailResponsavel':
        return validarEmailResponsavel(this.evento.emailResponsavel);
      case 'vagas':
        return validarVagas(this.evento.vagas);
      default:
        return null;
    }
  }

  mostrarErro(campo: CampoEvento): boolean {
    return !!this.camposTocados[campo] && this.obterMensagemErro(campo) !== null;
  }

  formularioInvalido(): boolean {
    const campos: CampoEvento[] = ['titulo', 'data', 'local', 'emailResponsavel', 'vagas'];

    return campos.some((campo) => this.obterMensagemErro(campo) !== null);
  }

  salvar(): void {
    if (this.formularioInvalido()) {
      return;
    }

    const eventoSalvo: Evento = {
      ...this.evento,
      id: this.proximoId,
    };

    this.eventos.push(eventoSalvo);
    this.proximoId += 1;
    this.evento = this.criarEventoVazio();
    this.camposTocados = {};
  }
}
