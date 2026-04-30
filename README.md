# Tanuj Gupta - Portfolio Website

A modern, responsive portfolio website built with Angular showcasing my experience as a Software Engineer specializing in Backend & Cloud technologies.

## 🚀 Live Demo

[View Live Site](https://your-username.github.io/your-repo-name/)

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Easy to Update** - All content managed through JSON files
- **Performance Optimized** - Fast loading times and smooth interactions
- **SEO Friendly** - Optimized for search engines

## 🛠️ Built With

- **Angular 19** - Frontend framework
- **TypeScript** - Programming language
- **Tailwind CSS** - Styling framework
- **Lucide Angular** - Icon library
- **RxJS** - Reactive programming

## 📋 Sections

1. **Hero** - Introduction with animated role rotation
2. **About** - Professional summary and key stats
3. **Skills** - Technical skills organized by category
4. **Projects** - Portfolio of key projects with filters
5. **Experience** - Work history and education timeline
6. **Contact** - Contact form and social links

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v20 or higher)
- npm (v10 or higher)
- Git

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

4. Open browser and navigate to `http://localhost:4200/`

## 📝 Updating Content

All website content is stored in JSON files located in `src/app/data/`:

- `hero.json` - Name, tagline, and roles
- `about.json` - Bio, quick facts, and statistics
- `skills.json` - Technical skills and certifications
- `projects.json` - Project portfolio
- `experience.json` - Work history and education
- `contact.json` - Contact information
- `social.json` - Social media links

Simply edit these JSON files to update your portfolio content - no code changes needed!

## 🚀 Deployment

### Deploy to GitHub Pages

1. Follow the detailed guide in [DEPLOYMENT.md](DEPLOYMENT.md)

2. Quick deploy (after initial setup):
```bash
# Windows
deploy.bat

# Linux/Mac
chmod +x deploy.sh
./deploy.sh
```

### Manual Deployment

```bash
# Build for production
ng build --configuration production --base-href /YOUR_REPO_NAME/

# Deploy
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Color Scheme

The portfolio uses a professional color palette:
- Primary: Blue (#3b82f6)
- Secondary: Purple (#8b5cf6)
- Accent: Pink (#ec4899)
- Background: White & soft gradients

## 📄 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/        # UI components
│   │   ├── services/          # Data services
│   │   ├── models/            # TypeScript interfaces
│   │   ├── animations/        # Animation utilities
│   │   └── data/              # JSON content files
│   ├── assets/                # Images and static files
│   └── styles.css             # Global styles
├── DEPLOYMENT.md              # Deployment guide
└── README.md                  # This file
```

## 🔗 Connect With Me

- **Email**: tanuj.gupta.work@gmail.com
- **LinkedIn**: [linkedin.com/in/tanuj-gupta-work](https://linkedin.com/in/tanuj-gupta-work)
- **Phone**: +91-9644398102

## 📈 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- SEO Score: 100

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev/)
- Hosted on [GitHub Pages](https://pages.github.com/)

---

Made with ❤️ by Tanuj Gupta
