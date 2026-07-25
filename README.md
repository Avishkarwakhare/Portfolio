# Personal Portfolio | Avishkar Wakhare

A premium, interactive personal portfolio website designed to showcase my academic details, technical skills, certifications, and recent projects. Built using React, Vite, Tailwind CSS, and Framer Motion, it features a fluid 3D cosmic background using Three.js/Fiber.

## 🚀 Live Preview
Explore the portfolio online: [avishkarwakhare.vercel.app](https://github.com/Avishkarwakhare)

---

## ✨ Features
- **3D Cosmic Background:** An interactive starry space background and floating objects that react smoothly to pointer movements, built with `@react-three/fiber`.
- **Interactive Projects & Credentials Showcase:** Uses custom touch-responsive Swiper carousels with beautiful 3D coverflow effects to view certifications and project highlights.
- **Smooth Inertial Scrolling:** Integrated with Lenis scroll for a premium, native-feeling scroll experience across all browsers.
- **Fully Responsive Layout:** Optimized for mobile, tablet, and desktop screens with tailored animations for each layout size.
- **Interactive Contact Form:** A clean form integrated with Formspree for direct, seamless email dispatching.

---

## 🛠️ Tech Stack
- **Core:** React 19, JavaScript (ES6+), HTML5, CSS3
- **Styling:** Tailwind CSS (v3), PostCSS
- **Animations:** Framer Motion, Three.js, React Three Fiber (R3F), @react-three/drei
- **Utilities:** Lenis, Lucide React, Swiper, Class Variance Authority (CVA), clsx

---

## ⚙️ Project Setup & Installation

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/Avishkarwakhare/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
To generate a highly optimized production build, run:
```bash
npm run build
```
The output directory will be generated under `/dist`, ready to deploy to Vercel, Netlify, or AWS.

---

## 📂 Project Structure
```text
├── public/                 # Static assets (PDFs, icons)
├── src/
│   ├── assets/             # Images and design assets
│   ├── components/         # Core UI sections (Overview, Projects, etc.)
│   │   └── ui/             # Reusable Shadcn UI blocks (Button, Input, Textarea)
│   ├── lib/                # Utility helper scripts
│   ├── App.jsx             # Main layout and section router
│   ├── index.css           # Global Tailwind classes and Swiper configurations
│   └── main.jsx            # React root entrypoint
├── package.json            # Configuration and script file
├── tailwind.config.js      # Tailwind theme configuration
└── vite.config.js          # Vite configurations
```

---

## 📄 License
This project is open-source. Feel free to use it as inspiration for your own portfolios!
