const fs = require('fs');
const path = require('path');

// Create a simple placeholder image (1x1 pixel PNG)
const placeholderImage = Buffer.from([
  0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D,
  0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
  0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xDE, 0x00, 0x00, 0x00,
  0x0C, 0x49, 0x44, 0x41, 0x54, 0x08, 0xD7, 0x63, 0xF8, 0x0F, 0x00, 0x00,
  0x01, 0x00, 0x01, 0x00, 0x18, 0xDD, 0x8D, 0xB4, 0x00, 0x00, 0x00, 0x00,
  0x49, 0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
]);

// Ensure directories exist
const imagesDir = path.join(__dirname, 'public', 'images');
const galleryDir = path.join(imagesDir, 'gallery');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// Create all required images
const images = [
  'logo.jpg',
  'istanbul1.jpg',
  'istanbul2.jpg',
  'dubai1.jpg',
  'dubai2.jpg',
  'cairo1.jpg',
  'cairo2.jpg'
];

const galleryImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];

console.log('📸 Creating placeholder images...');

// Create main images
images.forEach(image => {
  const filePath = path.join(imagesDir, image);
  fs.writeFileSync(filePath, placeholderImage);
  console.log(`✅ Created: ${image}`);
});

// Create gallery images
galleryImages.forEach(image => {
  const filePath = path.join(galleryDir, image);
  fs.writeFileSync(filePath, placeholderImage);
  console.log(`✅ Created: gallery/${image}`);
});

console.log('\n🎉 All placeholder images created successfully!');
console.log('📁 Images created:');
console.log('- Logo and package images in public/images/');
console.log('- Gallery images in public/images/gallery/');
console.log('\n💡 Replace these with your real images when ready!');
