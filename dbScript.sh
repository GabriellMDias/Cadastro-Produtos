#!/bin/bash

sudo -u postgres psql -c "CREATE ROLE userdb WITH LOGIN PASSWORD '123456' SUPERUSER CREATEDB CREATEROLE REPLICATION BYPASSRLS;"

sudo -u postgres psql -c "CREATE DATABASE userdb;"

sudo -u postgres psql -d userdb -c "CREATE TABLE produto (
id_produto serial PRIMARY KEY,
descricao varchar(50) NOT NULL,
stock int DEFAULT 0,
categoria varchar(50) NOT NULL
);"
