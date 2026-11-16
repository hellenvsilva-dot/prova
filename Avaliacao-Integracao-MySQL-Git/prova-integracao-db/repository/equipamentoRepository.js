import conexao from "../config/conexao";

export async function criarEquipamentos(equipamentos) {
    const sql = "insert into equipamento ( nome, setor, status , codigoPatrimonio , values(?, ? ,? ,?))";
    const [resultado] = await conexao.execute(sql,[
        equipamentos.equipamentoid,
        equipamentos.nome,
        equipamentos.setor,
        equipamentos.status
    ]);
    
    return resultado.insertId;
}
export async function listarEquipamentos() {
     const sql = "select * from equipamentos order by id_equipamento"
     const [linhas] = await conexao.execute(sql);
        
        return linhas;
}

export async function buscarEquipamentoPorId(id) {
     const sql = "select * from equipamentos where id = ?"
        const [linhas] = await conexao.execute(sql, [id]);
    
        return linhas(0);
}

export async function atualizarEquipamento(id, equipamento) {
      const sql = "update calibracoes set (nome = ?, setor  = ?, status  = ? , codigoPatrimonio  = ? , values(?, ? ,? ,?))"
      const [resultado] = await conexao.execute(sql,[
             equipamento.equipamentoid,
             equipamento.nome,
             equipamento.setor,
             equipamento.status,
             id
]);

 return resultado.affectedrows;

}

export async function excluirEquipamento(id) {
    const sql = "delete from equipamentos where id = ?"
    const [resultado] = await conexao.executar(sql , [id])

    return resultado.insertId;

}
