# AmosCut Barber Shop Website

Welcome to the AmosCut Barber Shop, a modern, high-end, full-stack web application designed to provide a premium online experience for booking and showcasing barber services. This project embodies a street-luxury aesthetic with a focus on clean design, advanced animations, and robust functionality.

## Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Project Structure](#project-structure)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
    -   [Running the Project](#running-the-project)
-   [API Endpoints (Serverless Functions)](#api-endpoints-serverless-functions)
-   [Design Philosophy](#design-philosophy)
-   [Contributing](#contributing)
-   [License](#license)

## Features

*   **Homepage:** A striking hero section with bold typography, full-screen background video, and clear CTAs.
*   **Services Page:** Detailed list of services, prices, and estimated times, presented in elegant glassmorphic cards.
*   **Real-time Booking System:**
    *   Multi-step guided booking flow for selecting services, barbers, dates, and times.
    *   User authentication (Login/Signup - mocked).
    *   Prevention of double bookings (simulated in API).
    *   Confirmation (simulated).
*   **Gallery:** High-quality image grid showcasing haircuts and beard styles with hover effects.
*   **About Amos:** A compelling story section about the founder, his experience, and the brand's philosophy.
*   **Contact Page:** Interactive map integration, contact form, phone, WhatsApp, and social media links.
*   **Admin Dashboard (Placeholder):** A conceptual, login-protected dashboard for managing appointments, services, barbers, and gallery content.
*   **Dark Mode:** Default dark mode with an option to toggle.
*   **Responsive Design:** Mobile-first approach for seamless experience across all devices.
*   **Advanced UI/UX:**
    *   "Insane" glassmorphism effects.
    *   3D transform hover effects.
    *   Animated gradient borders.
    *   Bento-box layouts.
    *   Framer Motion-driven micro-interactions and page transitions.
    *   Professional whitespace and high-impact typography.

## Tech Stack

*   **Frontend:**
    *   React 18+
    *   Vite (Fast build tool)
    *   Tailwind CSS (for utility-first styling)
    *   Framer Motion (for advanced animations)
    *   Lucide React (for icons)
    *   Radix UI (for accessible UI primitives like Tabs)
    *   React Router DOM (for navigation)
    *   `clsx`, `tailwind-merge`, `class-variance-authority` (for robust styling)
    *   `react-intersection-observer` (for scroll animations)
*   **Backend:**
    *   Vercel Serverless Functions (Node.js) - _(Simulated for demonstration)_
*   **Database:**
    *   MongoDB / PostgreSQL - _(Conceptual, not implemented in this frontend-focused project)_
*   **Authentication:**
    *   JWT or OAuth - _(Conceptual client-side flow, not full implementation)_

## Project Structure

```
amoscut-barbershop/
├── public/
│   └── logo.svg
├── src/
│   ├── api/                     # Vercel Serverless Functions (mocked)
│   │   ├── auth/
│   │   │   ├── login.js
│   │   │   └── signup.js
│   │   ├── appointments.js
│   │   ├── barbers.js
│   │   ├── contact.js
│   │   └── services.js
│   ├── components/
│   │   ├── shared/              # Reusable layout and common components
│   │   │   ├── BentoGrid.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── GlassCard.jsx
│   │   │   └── Navbar.jsx
│   │   └── ui/                  # Radix-like UI components built with Tailwind/CVA
│   │       ├── button.jsx
│   │       ├── input.jsx
│   │       └── label.jsx
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark/Light mode context
│   ├── hooks/
│   │   └── useAuth.js           # Mock authentication hook
│   ├── lib/
│   │   └── utils.js             # Utility functions (cn for Tailwind)
│   ├── pages/                   # Main application pages
│   │   ├── About.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── Auth.jsx
│   │   ├── Booking.jsx
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   └── Services.jsx
│   ├── App.jsx                  # Main application component & router
│   ├── index.css                # Tailwind base styles and custom CSS
│   └── main.jsx                 # Entry point
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js            # PostCSS configuration for Tailwind
├── README.md
├── tailwind.config.js           # Tailwind CSS configuration
├── vercel.json                  # Vercel serverless function rewrites
└── vite.config.js               # Vite build configuration
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

*   Node.js (v18 or higher)
*   npm (v9 or higher) or Yarn (v1.22 or higher)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/amoscut-barbershop.git
    cd amoscut-barbershop
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Project

To run the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the Vite development server, and you can view the application in your browser, usually at `http://localhost:5173`.

**Note on Serverless Functions:**
The `api/` directory contains placeholder serverless functions designed to run on Vercel. During local development with `vite`, direct calls to `/api/...` might not work without additional setup (e.g., a proxy or a dedicated local server for API routes). For this project, the frontend makes `fetch` requests directly to `/api/...`, which are intended to be handled by Vercel's build process when deployed. For local testing without deployment, the API calls will attempt to reach these paths but won't be executed as serverless functions. You can mock network responses if needed for thorough local testing, or deploy to Vercel to see the full stack in action.

## API Endpoints (Serverless Functions)

The `api/` directory defines serverless functions intended for deployment on Vercel. These are currently mocked to return static JSON responses or simulate basic CRUD operations for demonstration purposes.

*   `POST /api/auth/login`: Authenticate a user.
*   `POST /api/auth/signup`: Register a new user.
*   `GET /api/services`: Retrieve a list of services.
*   `GET /api/barbers`: Retrieve a list of barbers.
*   `GET /api/appointments`: Retrieve all appointments.
*   `POST /api/book` (or `/api/appointments`): Book a new appointment.
*   `POST /api/contact`: Send a contact form message.

## Design Philosophy

This website is crafted with a "$1M Dollar Tech Startup" aesthetic, emphasizing:

*   **Ultra-Modern & Clean:** A sleek, minimal design with dark themes and metallic accents.
*   **High-Performance Aesthetic:** Visually rich yet optimized for speed and fluidity.
*   **Glassmorphism:** Extensive use of frosted glass effects for depth and elegance.
*   **3D Transform & Hover Effects:** Subtle yet impactful animations on interactive elements.
*   **Animated Gradient Borders:** Dynamic borders that add a touch of luxury and motion.
*   **Bento-Box Layouts:** Structured and engaging content presentation.
*   **Micro-interactions:** Detailed animations powered by Tailwind CSS and Framer Motion for a delightful user experience.
*   **Pro-level Whitespace:** Thoughtful use of space to enhance readability and visual impact.
*   **Massive High-Impact Typography:** Bold and commanding headlines for a strong brand presence.
*   **Seamless Transitions:** Smooth page transitions and element animations for an immersive browsing experience.
*   **Brand Vibe:** Black, dark gray, and amber-gold/white accents convey a premium, masculine, and street-luxury feel.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).