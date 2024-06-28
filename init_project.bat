:: Navega até o diretório onde o arquivo .bat está salvo
cd /d %~dp0

:: Inicializa um novo projeto Node.js, se ainda não existir
if not exist package.json (
    echo Inicializando um novo projeto Node.js...
    npm init -y
)

echo Instalando http-server...
npm install http-server

:: Mantém a janela do CMD aberta
pause
