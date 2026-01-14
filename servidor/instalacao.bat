@echo off
title Instalador Gigante Despachante
echo ===========================================
echo   INSTALANDO SERVIDOR GIGANTE DESPACHANTE
echo ===========================================

:: Instala o PM2 globalmente caso nao tenha
call npm install pm2 -g

:: Instala as dependencias da pasta (node_modules)
call npm install

:: Inicia o servidor com o PM2
call pm2 delete api-gigante
call pm2 start src/index.js --name "api-gigante"

:: Salva para iniciar com o Windows
call pm2 save

echo.
echo ===========================================
echo   CONFIGURACAO CONCLUIDA COM SUCESSO!
echo ===========================================
pause