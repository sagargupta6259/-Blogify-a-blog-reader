import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { fetchUserById, fetchPostsByUserId } from '../services/api';

function Author() {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAuthorData() {
      try {
        setLoading(true);
        const userData = await fetchUserById(id);
        setAuthor(userData);

        const userPosts = await fetchPostsByUserId(id);
        setPosts(userPosts);

        setError(null);
      } catch (err) {
        console.error(err);
        setError('Failed to load author details.');
      } finally {
        setLoading(false);
      }
    }

    fetchAuthorData();
  }, [id]);

  if (loading) {
    return <p className="loading">Loading author profile...</p>;
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error">{error}</p>
        <Link to="/posts" className="btn btn-secondary">
          Back to Posts
        </Link>
      </div>
    );
  }

  if (!author) {
    return <p>Author not found.</p>;
  }

  return (
    <div className="author-page">
      <Link to="/posts" className="back-link">
        ← Back to Posts
      </Link>

      <div className="author-card">
        <h2>{author.name}</h2>
        <p><strong>Username:</strong> @{author.username}</p>
        <p><strong>Email:</strong> {author.email}</p>
        <p><strong>Phone:</strong> {author.phone}</p>
        <p><strong>Website:</strong> {author.website}</p>
        <p>
          <strong>Company:</strong> {author.company ? author.company.name : 'N/A'}
        </p>
        {author.company?.catchPhrase && (
          <p>
            <strong>Catchphrase:</strong> "{author.company.catchPhrase}"
          </p>
        )}
      </div>

      <div className="author-posts-section">
        <h3>Posts by {author.name} ({posts.length})</h3>

        {posts.length === 0 ? (
          <p>This author has not written any posts yet.</p>
        ) : (
          <div className="posts-list">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Author;
