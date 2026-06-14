@echo off
setlocal

cd /d "%~dp0"

echo [Run] Starting se3cdocs dev server...
echo.

where node >nul 2>&1
if errorlevel 1 (
    echo [Error] Node.js is not installed or not in PATH.
    echo [Hint] Install Node.js LTS from https://nodejs.org
    pause
    exit /b 1
)

where npm.cmd >nul 2>&1
if errorlevel 1 (
    echo [Error] npm.cmd is not available. Check Node.js installation.
    pause
    exit /b 1
)

set "NEED_INSTALL=0"

if not exist "node_modules" set "NEED_INSTALL=1"
if not exist "node_modules\vite\package.json" set "NEED_INSTALL=1"
if not exist "node_modules\remark-gfm\package.json" set "NEED_INSTALL=1"
if not exist "node_modules\@tailwindcss\postcss\package.json" set "NEED_INSTALL=1"

if "%NEED_INSTALL%"=="1" (
    echo [Info] Missing dependencies detected. Running npm install...
    npm.cmd install
    if errorlevel 1 (
        echo.
        echo [Error] npm install failed.
        pause
        exit /b 1
    )
)

echo.
echo [Run] npm.cmd run dev -- --host 0.0.0.0
echo [Hint] Press Ctrl+C to stop the server.
echo.
npm.cmd run dev -- --host 0.0.0.0

echo.
pause
