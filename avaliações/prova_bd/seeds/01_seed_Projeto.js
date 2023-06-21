exports.seed = function(knex) {
  return knex('tb_projetos')
    .del()
    .then(function() {
      return knex('tb_projetos').insert([
        { Nome_Projeto: 'Prova de bedê', descricao_Projeto: 'provinha que temos que fazer', Prazo_Projeto: '12/09/9900' },
        { Nome_Projeto: 'bedê2', descricao_Projeto: 'temos que fazerrrrr', Prazo_Projeto: '18/49/990' },
      ]);
    })
};