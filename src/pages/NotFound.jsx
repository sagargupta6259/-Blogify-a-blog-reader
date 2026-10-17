import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-page">
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
