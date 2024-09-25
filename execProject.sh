#!/bin/bash

# Navega até o diretório onde o arquivo script está salvo
cd "$(dirname "$0")"

# Inicia o servidor HTTP usando o http-server localmente instalado
echo "Iniciando o servidor HTTP..."
npx http-server

# Mantém o terminal aberto
read -p "Pressione qualquer tecla para continuar..."
