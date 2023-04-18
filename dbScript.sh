#!/bin/bash

read -p "1 - Criar Banco de Dados"$'\n'"2 - Excluir Banco de dados"$'\n' option

if [ $option -eq 1 ]
        then
        sudo -u postgres psql -c "CREATE ROLE userdb WITH LOGIN PASSWORD '123456' SUPERUSER CREATEDB CREATEROLE REPLICATION BYPASSRLS;"
        sudo -u postgres psql -c "CREATE DATABASE userdb;"
        sudo -u postgres psql -d userdb -c "CREATE TABLE produto (
                id_produto serial PRIMARY KEY,
                descricao varchar(50) NOT NULL,
                stock int DEFAULT 0,
                categoria varchar(50) NOT NULL
                );"
elif [ $option -eq 2 ]
        then
        echo "Excluir banco de dados..."
	sudo -u postgres psql -c "DROP DATABASE userdb;"
	sudo -u postgres psql -c "DROP ROLE userdb;"

else
    echo "Opção Inválida!"
fi
