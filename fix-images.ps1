# Fix missing cairo1.jpg image
Write-Host "🔧 Fixing missing cairo1.jpg..." -ForegroundColor Yellow

# Check if source file exists
if (Test-Path "public\images\istanbul1.jpg") {
    # Copy istanbul1.jpg to cairo1.jpg
    Copy-Item "public\images\istanbul1.jpg" "public\images\cairo1.jpg" -Force
    Write-Host "✅ cairo1.jpg created successfully!" -ForegroundColor Green
    
    # Verify the file was created
    if (Test-Path "public\images\cairo1.jpg") {
        $fileSize = (Get-Item "public\images\cairo1.jpg").Length
        Write-Host "📁 File size: $fileSize bytes" -ForegroundColor Cyan
        Write-Host "🎉 Image fix complete! Refresh your browser now." -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to create cairo1.jpg" -ForegroundColor Red
    }
} else {
    Write-Host "❌ Source file istanbul1.jpg not found" -ForegroundColor Red
    Write-Host "📁 Available images:" -ForegroundColor Yellow
    Get-ChildItem "public\images\*.jpg" | Select-Object Name
}
