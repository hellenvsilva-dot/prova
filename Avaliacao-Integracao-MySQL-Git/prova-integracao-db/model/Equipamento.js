export class Equipamento {
  constructor(codigoPatrimonio, nome, setor, status = "ativo") {
    this.codigoPatrimonio = codigoPatrimonio;
    this.nome = nome;
    this.setor = setor;
    this.status = status;
  }

  validar() {
    if (!this.codigoPatrimonio || !this.nome || !this.setor) {
      throw new Error("Código né, nome e setor são obrigatórios.");
    }

    if (!['ativo', 'inativo'].includes(this.status)) {
      throw new Error("Oh oh status deve ser ativo ou inativo.");
    }
  }
}
