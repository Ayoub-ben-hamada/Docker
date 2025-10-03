@echo off
echo =================================
echo   TEST APPLICATION DOCKER
echo =================================
echo.

echo 1. Verification des dependances...
cd /d "c:\Users\ayoub\Desktop\BIg Data\intro docker\Docker"

if exist "node_modules" (
    echo ✓ Node modules present
) else (
    echo ❌ Node modules manquants - Installation...
    npm install
)

echo.
echo 2. Verification des fichiers...
if exist "src\pages\Contact.jsx" (
    echo ✓ Page Contact presente
) else (
    echo ❌ Page Contact manquante
)

if exist "src\App.jsx" (
    echo ✓ App.jsx present
) else (
    echo ❌ App.jsx manquant
)

echo.
echo 3. Demarrage du serveur de developpement...
echo Appuyez sur Ctrl+C pour arreter
echo.
npm run dev

pause
