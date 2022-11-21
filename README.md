# LabProj

 - Medusa CLI

 - Pré-requisitos

        Como pré-requisitos apenas é necessário ter o node nas versões 14 e 16, 
        verificamos a versão do node através do comando:
         - node -v

 - Instalar o Medusa CLI

        Para instalar globalmente o Medusa CLI utilizamos o seguinte comando:
        npm install @medusajs/medusa-cli -g


 - Criar o projeto
        Utilizamos o seguinte comando para criar o projeto no Medusa:

         - medusa new nome-do-projeto --seed


 - Iniciar o Medusa server 
        E para dar inicio ao projeto basta usar o seguinte comando:

         - cd nome-do-projeto
           medusa develop


 - Database - PostgreSQL

        Como vamos utilizar o PostgreSQL no nosso projeto, temos que o ligar ao PostgreSQL.

 - Instalar o PostgreSQL

        Para instalar o PostgreSQL basta aceder a https://www.postgresql.org/download/ 
        e selecionar o sistema operativo que estamos a utilizar.




 - Conectar o PostgreSQL ao Medusa

        Após ter criado uma base de dados no PostgreSQL 
        precisamos apenas de duas configurações para conectar.
        No database_type mudamos para "postgres",
        e colocamos o URL da nossa base de dados no database_url.

 "module.exports = {
  projectConfig: {
    //...other configurations
    database_type: "postgres",
    database_url: DATABASE_URL,
  },
};"