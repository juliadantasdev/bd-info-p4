const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  }
});

class Projetos {
  static async inserirProjetos(projeto) {
    try {
      const [id] = await database('tb_projetos').insert(projeto);
      console.log('projeto inserido com ID:', id);
    } catch (error) {
      console.error('Erro ao inserir o projeto', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarProjetos(id, projeto) {
    try {
      const result = await database('tb_projetos').where({ id }).update(projeto);
      console.log('projeto atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar o projeto:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterProjetos(id) {
    try {
      const livro = await database('tb_projetos').where({ id }).first();
      console.log('projeto encontrado:', livro);
    } catch (error) {
      console.error('Erro ao obter o projeto:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirProjetos(id) {
    try {
      const result = await database('tb_projetos').where({ id }).del();
      console.log('projeto excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir o projeto:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Projetos;