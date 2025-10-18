const fs = require('fs');
const path = require('path');

// Read the istanbul1.jpg file
const sourcePath = path.join(__dirname, 'public', 'images', 'istanbul1.jpg');
const targetPath = path.join(__dirname, 'public', 'images', 'cairo1.jpg');

try {
  // Check if source exists
  if (fs.existsSync(sourcePath)) {
    // Copy the file
    fs.copyFileSync(sourcePath, targetPath);
    console.log('✅ cairo1.jpg created successfully!');
    console.log('📁 File size:', fs.statSync(targetPath).size, 'bytes');
  } else {
    console.log('❌ Source file istanbul1.jpg not found');
  }
} catch (error) {
  console.log('❌ Error:', error.message);
}
