
# Maplarge Application Collins Self SPA

This is a single-page application (SPA) built with Vanilla TypeScript and Vite for building, designed to render article data from a local JSON file and support dynamic routing and sorting. It uses vanilla Typescript with modular components, Bootstrap for styling, and a custom router implementation.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)

### 📦 Installation

```bash
npm install
```

### 💻 Running the Development Server

```bash
npm run dev
```

This will start the Vite development server. Open your browser and navigate to:

```
http://localhost:5173
```

## 📁 Project Structure

- `src/components/` – Individual UI components (e.g., ArticlePage, Sidebar)
- `src/routes.ts` – Route configuration for the SPA
- `public/news_feed.json` – Static article data source
- `main.ts` – Entry point for application logic

## 🛠 Features

- **Functional Javascript** for loading content and components
- Custom client-side routing without a framework
- Article listing and filtering by category
- **Responsive design using Bootstrap**
- Sorting support by author, title, and date
- Dynamic content rendering with HTML template strings

## 🧪 Notes

This project is intentionally built without React or other frontend frameworks to demonstrate vanilla JS/TS application architecture.