# Books - React Book Listing Application

A React-based book listing application that displays a curated collection of self-help and motivational books with an interactive user interface.

## 📖 Overview

This project is a simple yet elegant book listing application built with React. It showcases various books with their covers, titles, authors, and prices, allowing users to browse and add books to their cart.

## 📸 Screenshot

![Books Application Home Page](./public/home.png)

## ✨ Features

- **Book Display**: Grid layout showcasing multiple books with cover images
- **Book Details**: Each book displays title, author, and price information
- **Interactive UI**: "Add to Cart" functionality for each book
- **Responsive Design**: Clean and modern styling with custom CSS
- **Component-Based Architecture**: Modular React components for maintainability

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/aadhar41/Books-React-Book-Listing-Application.git

cd books
```

1. Install dependencies:

```bash
npm install
```

1. Start the development server:

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```text
books/
├── public/
├── src/
│   ├── Book.js          # Individual book component
│   ├── BookList.js      # Book list container component
│   ├── books.js         # Book data array
│   ├── index.css        # Global styles
│   └── index.js         # Application entry point
├── package.json
└── README.md
```

## 🛠️ Available Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`

Launches the test runner in interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder

## 📚 Components

### Book Component

Displays individual book information including:

- Book cover image
- Title
- Author
- Price
- Add to Cart button

### BookList Component

Renders a collection of books in a grid layout using the Book component

## 🎨 Styling

The application uses custom CSS with a modern design featuring:

- Grid-based layout for book cards
- Hover effects on interactive elements
- Responsive design principles
- Clean typography and spacing

## 🔧 Technologies Used

- **React** (v19.2.3) - UI library
- **React DOM** (v19.2.3) - DOM rendering
- **React Scripts** (v5.0.1) - Build tooling
- **Create React App** - Project bootstrapping

## 📝 Notes

This project was initially configured to work with the [Potter API](https://potterapi-fedeperin.vercel.app/en/books) for fetching Harry Potter book data. The current version uses a static book array with self-help and motivational books.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.
