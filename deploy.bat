@echo off
REM Quick Deploy Script for GitHub Pages
REM Replace YOUR_REPO_NAME with your actual repository name

echo ================================
echo GitHub Pages Deployment Script
echo ================================
echo.

set /p REPO_NAME="Enter your GitHub repository name (e.g., portfolio): "

echo.
echo Building production version...
call ng build --configuration production --base-href /%REPO_NAME%/

if %ERRORLEVEL% NEQ 0 (
    echo Build failed! Please fix errors and try again.
    pause
    exit /b 1
)

echo.
echo Deploying to GitHub Pages...
call npx angular-cli-ghpages --dir=dist/portfolio/browser

if %ERRORLEVEL% NEQ 0 (
    echo Deployment failed! Please check errors above.
    pause
    exit /b 1
)

echo.
echo ================================
echo Deployment Successful! 🚀
echo ================================
echo.
echo Your site will be available at:
echo https://YOUR_USERNAME.github.io/%REPO_NAME%/
echo.
echo (Replace YOUR_USERNAME with your GitHub username)
echo.
pause
