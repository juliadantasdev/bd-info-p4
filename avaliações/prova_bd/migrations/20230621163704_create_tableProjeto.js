/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('tb_projetos', table => {
        table.string('Nome_Projeto').primary()
        table.string('Descricao_Projeto').notNull()
        table.string('Prazo_Projeto').notNull()  
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tb_projetos')
};
