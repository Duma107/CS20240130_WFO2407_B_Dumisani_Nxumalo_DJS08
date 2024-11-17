# VanLife Project

A React-based web application for van rentals, showcasing advanced routing concepts and modern web development practices.

Video Presentation Link (https://drive.google.com/file/d/1x88ZksRVy5kJ8PqHQMz6fDtENOPmyGlg/view?usp=sharing)
## Features

- Browse available vans with filtering options
- Detailed van information pages
- Host dashboard with income tracking
- Review management system
- Responsive design with Tailwind CSS

## Tech Stack

- React
- TypeScript
- React Router v6
- Tailwind CSS
- Vite

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components and routes
│   ├── host/          # Host dashboard related pages
│   └── ...           # Other page components
└── main.tsx          # Application entry point
```

## Routes

- `/` - Home page
- `/about` - About page
- `/vans` - Van listing page
- `/vans/:id` - Individual van details
- `/host` - Host dashboard
  - `/host/income` - Income tracking
  - `/host/vans` - Host's vans
  - `/host/reviews` - Review management

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request