import { Component } from '@angular/core';
import { Pessoa as PessoaModel } from './pessoa.model';
import { validarPessoa, validarIdsUnicos } from './pessoa.validacao';

@Component({
  selector: 'app-pessoa',
  imports: [],
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css'
})
export class Pessoa {

  pessoas: PessoaModel[] = [
    {
      id: 1,
      nome: 'Marlon Santos',
      curso: 'Engenharia de Computação',
      email: 'marlon@email.com',
      ativo: true,
      telefone: '71999999999',
      vinculo: 'Aluno'
    },
    {
      id: 1,
      nome: 'Ana Souza',
      curso: 'Direito',
      email: 'ana@email.com',
      ativo: true,
      telefone: '71988888888',
      vinculo: 'Aluno'
    },
    {
      id: 3,
      nome: 'Carlos Oliveira',
      curso: 'Engenharia de Software',
      email: 'carlos@email.com',
      ativo: false,
      vinculo: 'Professor'
    },
    {
      id: 4,
      nome: 'Juliana Santos',
      curso: 'Administração',
      email: 'juliana@email.com',
      ativo: true,
      telefone: '71977777777',
      vinculo: 'Funcionário'
    },
    {
      id: 5,
      nome: 'Eva123',
      curso: 'Medicina',
      email: 'eva#exemplo',
      ativo: true,
      telefone: '12345',
      vinculo: 'Aluno'
    }
  ];

  resultados = this.pessoas.map(pessoa => ({
    pessoa,
    erros: validarPessoa(pessoa)
  }));

  avisosIds = validarIdsUnicos(this.pessoas);

}

// TESTE TEMPORÁRIO 

