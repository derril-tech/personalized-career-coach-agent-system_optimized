#!/bin/bash

# TalentFlux Development Script
# This script starts both frontend and backend development servers

set -e

echo "🚀 Starting TalentFlux Development Environment"
echo "=============================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.11+ first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the project root directory."
    exit 1
fi

echo "📦 Installing dependencies..."

# Install root dependencies
npm install

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd apps/web
npm install
cd ../..

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd apps/api
pip install -e .
cd ../..

echo "✅ Dependencies installed successfully!"

# Check if environment files exist
if [ ! -f "apps/web/.env.local" ]; then
    echo "⚠️  Frontend .env.local not found. Copying from example..."
    cp apps/web/env.example apps/web/.env.local
    echo "📝 Please edit apps/web/.env.local with your configuration"
fi

if [ ! -f "apps/api/.env" ]; then
    echo "⚠️  Backend .env not found. Copying from example..."
    cp apps/api/env.example apps/api/.env
    echo "📝 Please edit apps/api/.env with your configuration"
fi

echo ""
echo "🔧 Starting development servers..."
echo "=================================="

# Function to cleanup background processes on exit
cleanup() {
    echo ""
    echo "🛑 Stopping development servers..."
    kill $FRONTEND_PID $BACKEND_PID 2>/dev/null || true
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start backend server
echo "🐍 Starting backend server (FastAPI)..."
cd apps/api
python -m uvicorn talentflux_api.main:app --reload --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!
cd ../..

# Wait a moment for backend to start
sleep 3

# Start frontend server
echo "⚛️  Starting frontend server (Next.js)..."
cd apps/web
npm run dev &
FRONTEND_PID=$!
cd ../..

echo ""
echo "✅ Development servers started!"
echo "=================================="
echo "🌐 Frontend: http://localhost:3000"
echo "🔌 Backend:  http://localhost:8000"
echo "📚 API Docs: http://localhost:8000/docs"
echo "🏥 Health:   http://localhost:8000/health"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Wait for both processes
wait $FRONTEND_PID $BACKEND_PID
