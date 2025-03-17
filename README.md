
# Hassan Ali - Portfolio Website

This repository contains the code for my personal portfolio website showcasing my work experience, projects, and skills as a Data Engineer.

![Portfolio Screenshot](/public/og-image.png)

## Live Demo

Visit the live portfolio at: [hassanali.dev](https://lovable.dev/projects/d1464ec1-3593-432b-a7a4-46b3912d5d8e)

## Project Structure

```
├── public/               # Static assets and images
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML entry point
└── tailwind.config.ts    # Tailwind CSS configuration
```

## Tech Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: For type-safe code
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and development server
- **shadcn/ui**: Accessible and customizable component library
- **React Router**: For page navigation
- **React Scroll**: For smooth scrolling to sections
- **Lucide React**: For icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HDAli00/HDAli.dev.git
   cd HDAli.dev
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and visit: `http://localhost:8080`

## Adding Your Resume

1. Add your resume PDF file to the public folder:
   ```bash
   # Ensure it's named resume.pdf
   public/resume.pdf
   ```

## Customizing the Portfolio

### Personal Information

To update your personal information, edit the following files:

- `src/components/HeroSection.tsx`: Update your name, bio, and contact links
- `src/components/AboutSection.tsx`: Update your about me section
- `src/components/ExperienceSection.tsx`: Update your work experience
- `src/components/ProjectsSection.tsx`: Update your projects
- `src/components/ContactSection.tsx`: Update your contact information

### Styling

The portfolio uses a custom color scheme defined in the Tailwind config:

- `portfolio-primary`: Dark blue for main background
- `portfolio-secondary`: Slightly lighter blue for cards
- `portfolio-accent`: Light blue for accents
- `portfolio-text`: White-ish text for main content
- `portfolio-muted`: Muted gray text for less important content

To modify the color scheme, edit the `tailwind.config.ts` file.

## Deployment

You can deploy this site to any static hosting service:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: contact@hassanali.dev
- LinkedIn: [linkedin.com/in/hd-ali](https://www.linkedin.com/in/hd-ali/)
- GitHub: [github.com/HDAli00](https://github.com/HDAli00)
