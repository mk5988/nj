import { Evento } from './evento';

export function validarTitulo(titulo: string): string | null {
  const texto = titulo.trim();

  if (texto.length < 5 || texto.length > 80) {
    return 'O título deve ter entre 5 e 80 caracteres.';
  }

  return null;
}

export function validarData(data: string): string | null {
  if (!data) {
    return 'A data é obrigatória.';
  }

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const dataSelecionada = new Date(`${data}T00:00:00`);

  if (Number.isNaN(dataSelecionada.getTime())) {
    return 'A data é obrigatória.';
  }

  if (dataSelecionada < hoje) {
    return 'A data não pode estar no passado.';
  }

  return null;
}

export function validarLocal(local: string): string | null {
  if (!local.trim()) {
    return 'O local não pode ficar em branco.';
  }

  return null;
}

export function validarEmailResponsavel(emailResponsavel: string): string | null {
  const email = emailResponsavel.trim();

  if (!email) {
    return 'O e-mail do responsável é obrigatório.';
  }

  const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!padrao.test(email)) {
    return 'E-mail em formato inválido.';
  }

  return null;
}

export function validarVagas(vagas: number | null): string | null {
  if (vagas === null || vagas === undefined) {
    return 'As vagas devem ser um número inteiro de 1 a 200.';
  }

  if (!Number.isInteger(vagas) || vagas < 1 || vagas > 200) {
    return 'As vagas devem ser um número inteiro de 1 a 200.';
  }

  return null;
}

export function validarEvento(evento: Evento): Record<keyof Omit<Evento, 'id'>, string | null> {
  return {
    titulo: validarTitulo(evento.titulo),
    data: validarData(evento.data),
    local: validarLocal(evento.local),
    emailResponsavel: validarEmailResponsavel(evento.emailResponsavel),
    vagas: validarVagas(evento.vagas),
  };
}
