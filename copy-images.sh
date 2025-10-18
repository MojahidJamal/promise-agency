#!/bin/bash

echo "📸 Copying images..."

# Source image
SOURCE="public/images/gallery/520820024_2463152330751886_886551266514980908_n.jpg"

# Copy for logo
cp "$SOURCE" "public/images/logo.jpg"

# Copy for package images
cp "$SOURCE" "public/images/istanbul1.jpg"
cp "$SOURCE" "public/images/istanbul2.jpg"
cp "$SOURCE" "public/images/dubai1.jpg"
cp "$SOURCE" "public/images/dubai2.jpg"
cp "$SOURCE" "public/images/cairo1.jpg"
cp "$SOURCE" "public/images/cairo2.jpg"

# Copy for gallery images
cp "$SOURCE" "public/images/gallery/1.jpg"
cp "$SOURCE" "public/images/gallery/2.jpg"
cp "$SOURCE" "public/images/gallery/3.jpg"
cp "$SOURCE" "public/images/gallery/4.jpg"
cp "$SOURCE" "public/images/gallery/5.jpg"
cp "$SOURCE" "public/images/gallery/6.jpg"
cp "$SOURCE" "public/images/gallery/7.jpg"
cp "$SOURCE" "public/images/gallery/8.jpg"

echo "✅ Done! Images copied successfully"
echo ""
echo "Images created:"
echo "✓ Logo: public/images/logo.jpg"
echo "✓ Package images: istanbul1.jpg, istanbul2.jpg, dubai1.jpg, dubai2.jpg, cairo1.jpg, cairo2.jpg"
echo "✓ Gallery images: 1.jpg through 8.jpg"

