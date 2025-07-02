export class Pagamento {
  valorTotal: number;
  valorEntrada: number;
  parcelas: string;
  balao: string;
  chaves: string;
  financiamento: string;

  constructor(partial?: Partial<Pagamento>) {
    Object.assign(this, partial);
  }
}
