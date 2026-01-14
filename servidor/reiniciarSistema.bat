@echo off
title Reiniciar Sistema - Gigante Despachante
echo Reiniciando os servicos...

:: Reinicia o processo no PM2
call pm2 restart api-gigante

:: Limpa logs antigos para nao encher o HD
call pm2 flush

echo.
echo ===========================================
echo   SISTEMA REINICIADO! PODE LOGAR NOVAMENTE.
echo ===========================================
timeout /t 5