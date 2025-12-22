# Personal Portfolio Website

A modern, flashy, and responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 **Modern Design** - Beautiful gradient animations and glassmorphism effects
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 🌈 **Interactive UI** - Hover effects and transitions throughout

## Sections

- **Hero** - Eye-catching introduction with animated background
- **About** - Personal summary and background
- **Experience** - Timeline of work experience
- **Projects** - Showcase of portfolio projects
- **Skills** - Technical skills with proficiency levels
- **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and description
   - Add your social media links

2. **About Section** (`src/components/About.jsx`):
   - Modify the about text to match your background

3. **Experience Section** (`src/components/Experience.jsx`):
   - Update the `experiences` array with your work history

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace the `projects` array with your actual projects
   - Update GitHub and demo links

5. **Skills Section** (`src/components/Skills.jsx`):
   - Modify the `skillCategories` array to reflect your skills
   - Adjust proficiency levels

6. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Configure form submission (currently uses a placeholder)

### Styling

The project uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles in individual component files

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## License

This project is open source and available under the MIT License.

