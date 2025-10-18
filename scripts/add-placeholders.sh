#!/bin/bash

# Script to download placeholder images for Trust Band Travel website
# This uses placeholder.com to generate images

echo "📸 Downloading placeholder images..."

# Create images directory if it doesn't exist
mkdir -p public/images/gallery

# Download package images (1200x800)
echo "Downloading package images..."
curl -o public/images/istanbul1.jpg "https://via.placeholder.com/1200x800/0d99e4/ffffff?text=Istanbul+Package" 2>/dev/null
curl -o public/images/istanbul2.jpg "https://via.placeholder.com/1200x800/0d99e4/ffffff?text=Istanbul+View" 2>/dev/null
curl -o public/images/dubai1.jpg "https://via.placeholder.com/1200x800/0d99e4/ffffff?text=Dubai+Package" 2>/dev/null
curl -o public/images/dubai2.jpg "https://via.placeholder.com/1200x800/0d99e4/ffffff?text=Dubai+View" 2>/dev/null
curl -o public/images/cairo1.jpg "https://via.placeholder.com/1200x800/0d99e4/ffffff?text=Cairo+Package" 2>/dev/null
curl -o public/images/cairo2.jpg "https://via.placeholder.com/1200x800/0d99e4/ffffff?text=Cairo+View" 2>/dev/null

# Download gallery images (800x800)
echo "Downloading gallery images..."
for i in {1..8}; do
  curl -o "public/images/gallery/$i.jpg" "https://via.placeholder.com/800x800/0d99e4/ffffff?text=Gallery+Image+$i" 2>/dev/null
done

echo "✅ Done! Placeholder images added to public/images/"
echo ""
echo "Images created:"
echo "- public/images/istanbul1.jpg, istanbul2.jpg"
echo "- public/images/dubai1.jpg, dubai2.jpg"
echo "- public/images/cairo1.jpg, cairo2.jpg"
echo "- public/images/gallery/1.jpg through 8.jpg"
echo ""
echo "🎉 Your site now has placeholder images!"

