@echo off
echo ===== DPS School Management - Clean Install =====
echo.

echo Deleting node_modules...
rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

echo Deleting Next.js cache...
rmdir /s /q .next

echo Deleting Drizzle cache...
rmdir /s /q drizzle

echo.
echo Clearing npm cache...
call npm cache clean --force

echo.
echo Installing dependencies...
call npm install

echo.
echo ===== Clean Install Complete! =====
echo.
echo To start the development server, run:
echo npm run dev
echo.
pause