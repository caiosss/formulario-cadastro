export class Proponente {
  nome: string;
  dataNascimento: string;
  rg: string;
  orgaoExpedidor: string;
  estadoCivil: string;
  profissao: string;
  cpf: string;
  cep: string;
  bairro: string;
  cidade: string;
  estado: string;
  email: string;
  telefone: string;

  constructor(partial?: Partial<Proponente>) {
    Object.assign(this, partial);
  }
}
