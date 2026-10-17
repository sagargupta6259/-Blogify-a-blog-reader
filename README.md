# Blogify (Blog Reader)

A simple blog reader web application built for Assignment-5 PS1 using React.js, Vite, and React Router.

## Features

- **Home Page (`/`)**: Welcome screen with a "Read Posts" button.
- **Posts Page (`/posts`)**: Displays post titles, the first 80 characters of each post body, and a real-time title search box.
- **Post Details (`/posts/:id`)**: Shows full post content, author details, and comments (name, email, body).
- **Author Page (`/users/:id`)**: Displays author details (name, email, company) and all posts written by them.
- **Page Not Found (`*`)**: 404 page with a link to navigate back home.

## Technologies Used

- React.js
- Vite
- React Router DOM
- JSONPlaceholder API

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.
