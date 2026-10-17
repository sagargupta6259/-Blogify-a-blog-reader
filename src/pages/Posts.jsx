import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import { fetchPosts } from '../services/api';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        const data = await fetchPosts();
        setPosts(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="posts-page">
      <h2>All Blog Posts</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search posts by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {loading && <p className="loading">Loading posts...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="posts-list">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <p>No posts found matching "{searchTerm}".</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Posts;
