# Agenda
A agenda contêm as funcionalidades de Login, Cadastro e Criar/Alterar/Deletar/ atividades.

Agenda feita utilizando:
 1. **React** (v18.2.0)
 2. **NodeJS** (v18.14.2)
 3. **MySQL** (v8.0)
	 
## Instruções para o uso da aplicação

### MySQL
No MySQL Workbench abra um aba de query e utilize

		create schema agenda;
		
		use agenda;
		
		create table usuario(
			id int primary key unique auto_increment not null,
		    login varchar(20) unique not null,
		    senha varchar(25) not null
		);
		
		create table atividade(
		id int primary key unique auto_increment not null,
	    nome varchar(20) not null,
	    dataInicio datetime,
	    datatermino datetime,
	    status varchar(10) not null,
	    usuarioId int,
    
	    foreign key (usuarioId) references usuario(id)
		);
---

**1.** Baixe ou clone o repositório.
**2.** Abra um terminal na pasta _front_ e outro terminal na pasta _back_.
**3.** Vá até _/back/src/database/db.js_ e altere os campos.

		host:  'localhost',
		user:  'seuUsuarioRoot',
		password:  'suaSenhaRoot',
		database:  'agenda'

**4.** Executar o comando ```npm start``` em ambos os terminais.
**5.** Após os carregamento utilize a agenda.