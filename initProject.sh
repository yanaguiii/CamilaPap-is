#!/bin/bash

# Navega até o diretório onde o arquivo script está salvo
cd "$(dirname "$0")"

# Inicializa um novo projeto Node.js, se ainda não existir
if [ ! -f package.json ]; then
    echo "Inicializando um novo projeto Node.js..."
    npm init -y
fi

# Instala o http-server
echo "Instalando http-server..."
npm install http-server

# Mantém o terminal aberto
read -p "Pressione qualquer tecla para continuar..."
