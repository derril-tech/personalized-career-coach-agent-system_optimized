@echo off
REM TalentFlux Development Script for Windows
REM This script starts both frontend and backend development servers

echo 🚀 Starting TalentFlux Development Environment
echo ==============================================

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python is not installed. Please install Python 3.11+ first.
    pause
    exit /b 1
)

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Please run this script from the project root directory.
    pause
    exit /b 1
)

echo 📦 Installing dependencies...

REM Install root dependencies
call npm install

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
cd apps\web
call npm install
cd ..\..

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd apps\api
call pip install -e .
cd ..\..

echo ✅ Dependencies installed successfully!

REM Check if environment files exist
if not exist "apps\web\.env.local" (
    echo ⚠️  Frontend .env.local not found. Copying from example...
    copy apps\web\env.example apps\web\.env.local
    echo 📝 Please edit apps\web\.env.local with your configuration
)

if not exist "apps\api\.env" (
    echo ⚠️  Backend .env not found. Copying from example...
    copy apps\api\env.example apps\api\.env
    echo 📝 Please edit apps\api\.env with your configuration
)

echo.
echo 🔧 Starting development servers...
echo ==================================

REM Start backend server
echo 🐍 Starting backend server (FastAPI)...
cd apps\api
start "TalentFlux Backend" cmd /k "python -m uvicorn talentflux_api.main:app --reload --host 0.0.0.0 --port 8000"
cd ..\..

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend server
echo ⚛️  Starting frontend server (Next.js)...
cd apps\web
start "TalentFlux Frontend" cmd /k "npm run dev"
cd ..\..

echo.
echo ✅ Development servers started!
echo ==================================
echo 🌐 Frontend: http://localhost:3000
echo 🔌 Backend:  http://localhost:8000
echo 📚 API Docs: http://localhost:8000/docs
echo 🏥 Health:   http://localhost:8000/health
echo.
echo Press any key to exit...
pause >nul
