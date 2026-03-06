# Books - React Book Listing Application

A modern, responsive React-based application designed to showcase a curated collection of motivational and self-help literature. This project demonstrates a clean, component-oriented architecture with a focus on visual presentation and user interaction.

## ✨ Key Features

- **Elegant Book Gallery**: A beautifully styled grid layout presenting high-quality book covers and essential metadata.
- **Dynamic Content Rendering**: Utilizes a centralized data structure to dynamically render book components with unique titles, authors, and pricing.
- **Interactive Shopping Flow**: Integrated "Add to Cart" functionality with immediate user feedback.
- **Modern Responsive Design**: Leverages custom CSS and flexbox/grid for a seamless experience across mobile, tablet, and desktop devices.
- **Performance-First Architecture**: Built with modular components, ensuring optimal re-rendering and maintainability.

## 📸 Screenshots

### Home Page

![Books Application Home Page](./public/home.png)

## 🚀 Recent Improvements

To ensure the application remains stable and aligned with modern web standards, the following updates were recently implemented:

- **Environment Modernization**: Updated the Browserslist database to the latest version, ensuring optimized bundles for modern browsers.
- **Code Quality & Accessibility Cleanup**:
  - Performed a meticulous audit of ESLint warnings.
  - **Accessibility Fix**: Resolved redundant `alt` attribute warnings in [Book.js](file:///d:/wamp64_2/www/reactjs/Books-React-Book-Listing-Application/src/Book.js) by implementing more descriptive and screen-reader-friendly alt text.
  - Refined JSX patterns to fully leverage the features of React 19.

## 🔧 Tech Stack

- **Frontend Library**: [React.js](https://react.org/) (v19.2.3)
- **State Management**: Built-in React Hooks
- **Styling**: Modern Vanilla CSS
- **Build Infrastructure**: React Scripts (v5.0.1)

## 📁 Project Structure

```text
books/
├── public/              # Static assets and entry HTML
├── src/
│   ├── Book.js          # Modular component for individual book cards
│   ├── BookList.js      # Container component for the book grid
│   ├── books.js         # Centralized book metadata repository
│   ├── index.css        # Core design system and global styles
│   └── index.js         # Application entry point and root rendering
├── package.json         # Project dependencies and deployment scripts
└── README.md            # Technical documentation
```

## 🛠️ Installation and Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/aadhar41/Books-React-Book-Listing-Application.git
   cd Books-React-Book-Listing-Application
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## 📄 Available Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the interactive test runner.
- `npm run build`: Synchronizes the project into a production-ready build folder.

## 📝 License

This project is specialized for educational and portfolio purposes.
