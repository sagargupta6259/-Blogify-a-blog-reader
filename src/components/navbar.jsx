import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Blogify</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </nav>
  );
}

export default Navbar;
