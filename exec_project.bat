:: Navega até o diretório onde o arquivo .bat está salvo
cd /d %~dp0

:: Inicia o servidor HTTP usando o http-server localmente instalado
echo Iniciando o servidor HTTP...
npx http-server

:: Mantém a janela do CMD aberta
pause
