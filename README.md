# Uday Kumar N - Portfolio Website

A modern, responsive portfolio website built with React, showcasing web development projects and skills.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with comprehensive breakpoints
- **Modern Tech Stack**: Built with React 19, Vite, and SCSS
- **Smooth Animations**: AOS (Animate On Scroll) integration
- **Contact Form**: Functional EmailJS integration
- **Component-Based Architecture**: Modular, maintainable code structure
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Performance Optimized**: Lazy loading, optimized images, and efficient rendering

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: SCSS, Bootstrap 5
- **Animations**: AOS (Animate On Scroll)
- **Contact**: EmailJS
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
   
   **Note**: Replace the placeholder values with your actual EmailJS credentials.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Project Structure

```
src/
├── main-comp/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx      # Navigation and social links
│   │   ├── Hero.jsx        # Main hero section
│   │   ├── About.jsx       # About and skills section
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer with social links
│   ├── Portfolio.jsx       # Main component (orchestrator)
│   ├── styles.scss         # Main styles
│   └── mediaQueries.scss   # Responsive breakpoints
├── assets/                 # Images and static files
└── App.jsx                 # Root component
```

## 🎨 Customization

### Adding New Projects

Edit `src/main-comp/components/Projects.jsx`:

```jsx
const projects = [
  {
    title: "Your Project Title",
    description: "Project description here...",
    image: projectImage,
    link: "https://your-project-url.com",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  // ... more projects
];
```

### Modifying Styles

- Main styles: `src/main-comp/styles.scss`
- Responsive styles: `src/main-comp/mediaQueries.scss`
- Component-specific styles can be added to the respective component files

### Updating Contact Form

1. Set up EmailJS account and get your credentials
2. Update the `.env.local` file with your credentials
3. Customize the form fields in `Contact.jsx`

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Set environment variables in Netlify dashboard

### Other Platforms
The project builds to a standard `dist` folder that can be deployed to any static hosting service.

## 🔒 Security

- **Environment Variables**: API keys are stored in `.env.local` (not committed to git)
- **Input Validation**: Form inputs are validated and sanitized
- **Secure Links**: External links use `rel="noopener noreferrer"`

## ♿ Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Semantic HTML**: Meaningful HTML structure
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Alt Text**: Descriptive alt text for images
- **Color Contrast**: WCAG compliant color combinations

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile (≤415px)
- Small tablets (416px - 450px)
- Medium tablets (451px - 567px)
- Large tablets (568px - 767px)
- Desktop (≥768px)

## 🚀 Performance

- **Lazy Loading**: Images load only when needed
- **Optimized Builds**: Vite for fast development and optimized production builds
- **Efficient Rendering**: React 19 optimizations
- **Minified Assets**: Production builds are optimized and minified

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **LinkedIn**: [Uday Kumar N](https://www.linkedin.com/in/udaykumar-n-83907a230/)
- **GitHub**: [uday7223](https://github.com/uday7223)
- **Email**: Use the contact form on the website

---

Built with ❤️ by Uday Kumar N 
