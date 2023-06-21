const projetos = require('./models/projetos');


const ExemploProjetos = {
    Nome_Projeto: 'prova bd', 
    Descricao_Projeto: 'Descricao_Projeto',
    Prazo_Projeto: 'lucas'
    
  };
   
console.log('banco de dados')
projetos.inserirProjetos(ExemploProjetos)