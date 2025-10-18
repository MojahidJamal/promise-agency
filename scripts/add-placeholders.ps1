# PowerShell script to download placeholder images for Trust Band Travel website
# This uses placeholder.com to generate images

Write-Host "📸 Downloading placeholder images..." -ForegroundColor Cyan

# Create images directory if it doesn't exist
New-Item -ItemType Directory -Force -Path "public/images/gallery" | Out-Null

# Download package images (1200x800)
Write-Host "Downloading package images..." -ForegroundColor Yellow

Invoke-WebRequest -Uri "https://via.placeholder.com/1200x800/0d99e4/ffffff?text=Istanbul+Package" -OutFile "public/images/istanbul1.jpg"
Invoke-WebRequest -Uri "https://via.placeholder.com/1200x800/0d99e4/ffffff?text=Istanbul+View" -OutFile "public/images/istanbul2.jpg"
Invoke-WebRequest -Uri "https://via.placeholder.com/1200x800/0d99e4/ffffff?text=Dubai+Package" -OutFile "public/images/dubai1.jpg"
Invoke-WebRequest -Uri "https://via.placeholder.com/1200x800/0d99e4/ffffff?text=Dubai+View" -OutFile "public/images/dubai2.jpg"
Invoke-WebRequest -Uri "https://via.placeholder.com/1200x800/0d99e4/ffffff?text=Cairo+Package" -OutFile "public/images/cairo1.jpg"
Invoke-WebRequest -Uri "https://via.placeholder.com/1200x800/0d99e4/ffffff?text=Cairo+View" -OutFile "public/images/cairo2.jpg"

# Download gallery images (800x800)
Write-Host "Downloading gallery images..." -ForegroundColor Yellow
for ($i = 1; $i -le 8; $i++) {
    Invoke-WebRequest -Uri "https://via.placeholder.com/800x800/0d99e4/ffffff?text=Gallery+Image+$i" -OutFile "public/images/gallery/$i.jpg"
}

Write-Host ""
Write-Host "✅ Done! Placeholder images added to public/images/" -ForegroundColor Green
Write-Host ""
Write-Host "Images created:" -ForegroundColor White
Write-Host "- public/images/istanbul1.jpg, istanbul2.jpg" -ForegroundColor Gray
Write-Host "- public/images/dubai1.jpg, dubai2.jpg" -ForegroundColor Gray
Write-Host "- public/images/cairo1.jpg, cairo2.jpg" -ForegroundColor Gray
Write-Host "- public/images/gallery/1.jpg through 8.jpg" -ForegroundColor Gray
Write-Host ""
Write-Host "🎉 Your site now has placeholder images!" -ForegroundColor Green

