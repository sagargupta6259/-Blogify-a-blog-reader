import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to Blogify</h1>
      <p>
        Blogify is a simple blog reader web application built with React, Vite,
        and React Router.
      </p>
      <p>
        Explore articles fetched from the free JSONPlaceholder API, search for
        posts by title, and view comments and author details.
      </p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/posts" className="btn btn-primary">
          Read Posts
        </Link>
      </div>
    </div>
  );
}

export default Home;
