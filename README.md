# Perfume Magazine Catalog

A modern, responsive web application to display a catalog of luxury perfumes with search, filter, and detail modal functionality.

## Features
- ✅ Hero section with Perfume Magazine Catalog title
- ✅ Search by perfume name
- ✅ Filter by type (Floral, Woody, Oriental, etc.) and mode (EDP, EDT)
- ✅ Responsive perfume card grid (CSS Grid)
- ✅ Clickable cards with modal popup for details
- ✅ Dark/Light theme toggle
- ✅ Mobile-first responsive design
- ✅ 16+ sample luxury perfumes with Unsplash images
- ✅ Modern animations and hover effects

## Tech Stack
- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Vercel-ready structure

## Local Development
1. Open `index.html` in your browser
2. No build step required!

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd "c:/Users/bwali/Desktop/perfume-magazine"
vercel

# Follow prompts (use defaults for most options)
```

### Option 2: Git + Vercel Dashboard
```bash
# Initialize Git (if not already done)
git init
git add .
git commit -m "Initial perfume catalog"

# Create GitHub repo and push
gh repo create perfume-magazine --public
git remote add origin https://github.com/YOUR_USERNAME/perfume-magazine.git
git push -u origin main

# Connect to Vercel Dashboard
# 1. Go to vercel.com
# 2. Import your GitHub repo
# 3. Deploy automatically!
```

## File Structure
```
perfume-magazine/
├── index.html          # Main page
├── css/
│   └── styles.css      # Responsive styles + dark mode
├── js/
│   ├── data.js         # 16+ perfume JSON data
│   └── script.js       # Search, filter, modal logic
├── assets/images/      # (Optional local images)
└── README.md          # This file
```

## Customization
- Edit `js/data.js` to add your real perfumes
- Replace Unsplash URLs with your product images
- Modify `css/styles.css` for branding

## Live Demo
After deployment: `https://your-project.vercel.app`

---

⭐ **Ready to deploy in 2 minutes!**
