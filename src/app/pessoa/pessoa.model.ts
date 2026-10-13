export interface Pessoa {
  id: number;
  nome: string;
  curso: string;
  email: string;
  ativo: boolean;
  telefone?: string;
  vinculo: 'Aluno' | 'Professor' | 'Funcionário';
}