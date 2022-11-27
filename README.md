# LabProj

Medusa CLI

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

- Nota - De seguida execute o seguinte comando no terminal e dê run ao servidor, verifique depois no pdAdmin se na base de dados que criou foram criadas as tabelas (schemas/tables).

       medusa seed -f ./data/seed.json

- Conectar o PostgreSQL ao Medusa

       Após ter criado uma base de dados no PostgreSQL
       precisamos apenas de duas configurações para conectar.

       Vamos a medusa-config.js e alterámos a variável DATABASE_URL para
        o seguinte formato `"postgresql://[user[:password]@][netloc][:port][/dbname]"`, 
        podem seguir como exemplo `"postgres://user123:pass123@localhost:5432/medusa_teste"`, ~
        é necessário tmabém alterar o `database_type` para `postgres`.
