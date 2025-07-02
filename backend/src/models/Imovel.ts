export class Imovel {
  enderecoImovel: string;
  quadraImovel: string;
  loteImovel: string;

  constructor(partial?: Partial<Imovel>) {
    Object.assign(this, partial);
  }
}