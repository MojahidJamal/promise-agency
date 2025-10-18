# 📸 Setup Images - Trust Band Travel

## ✅ What I've Done

1. ✅ Updated Navbar to use logo image
2. ✅ Created script to copy your image as placeholders
3. ✅ Ready to use your existing image for everything

## 🚀 Run This Command

In your **PowerShell** terminal (from the `trust-band` directory):

```powershell
# Navigate to trust-band folder
cd trust-band

# Run the copy script (choose one method)

# Method 1: Using bash (if available)
bash copy-images.sh

# Method 2: Manual PowerShell commands
$source = "public/images/gallery/520820024_2463152330751886_886551266514980908_n.jpg"

# Copy logo
Copy-Item $source "public/images/logo.jpg"

# Copy package images
Copy-Item $source "public/images/istanbul1.jpg"
Copy-Item $source "public/images/istanbul2.jpg"
Copy-Item $source "public/images/dubai1.jpg"
Copy-Item $source "public/images/dubai2.jpg"
Copy-Item $source "public/images/cairo1.jpg"
Copy-Item $source "public/images/cairo2.jpg"

# Copy gallery images
1..8 | ForEach-Object { Copy-Item $source "public/images/gallery/$_.jpg" }

Write-Host "✅ Images copied successfully!" -ForegroundColor Green
```

## 📋 What Will Be Created

After running the script, you'll have:

```
public/images/
  ├── logo.jpg              ✨ Used in navbar
  ├── istanbul1.jpg         ✨ Used in packages
  ├── istanbul2.jpg
  ├── dubai1.jpg
  ├── dubai2.jpg
  ├── cairo1.jpg
  ├── cairo2.jpg
  └── gallery/
      ├── 1.jpg             ✨ Used in gallery page
      ├── 2.jpg
      ├── 3.jpg
      ├── 4.jpg
      ├── 5.jpg
      ├── 6.jpg
      ├── 7.jpg
      └── 8.jpg
```

## 🎯 After Running the Script

1. **Refresh your browser** (http://localhost:3000)
2. **You should see:**
   - ✅ Logo image in the navbar
   - ✅ Package images on homepage
   - ✅ Gallery images on gallery page
   - ✅ No more image 404 errors

## 🔄 Alternative: Manual Copy

If the script doesn't work, manually copy the file:

1. Open `public/images/gallery/520820024_2463152330751886_886551266514980908_n.jpg`
2. Copy it
3. Paste and rename to:
   - `logo.jpg`
   - `istanbul1.jpg`, `istanbul2.jpg`
   - `dubai1.jpg`, `dubai2.jpg`
   - `cairo1.jpg`, `cairo2.jpg`
   - Gallery: `1.jpg` through `8.jpg` in the gallery folder

## 📸 Later: Add Real Images

When you have real travel photos, simply replace:
- `istanbul1.jpg`, `istanbul2.jpg` with real Istanbul photos
- `dubai1.jpg`, `dubai2.jpg` with real Dubai photos
- `cairo1.jpg`, `cairo2.jpg` with real Cairo photos
- Gallery images with real trip photos

The website will automatically use the new images!

---

**Next Step:** Run the PowerShell commands above, then refresh your browser! 🎉

