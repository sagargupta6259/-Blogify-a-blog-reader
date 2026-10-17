import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostById, fetchCommentsByPostId, fetchUserById } from '../services/api';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPostAndComments() {
      try {
        setLoading(true);
        const postData = await fetchPostById(id);
        setPost(postData);

        const commentsData = await fetchCommentsByPostId(id);
        setComments(commentsData);

        if (postData.userId) {
          try {
            const userData = await fetchUserById(postData.userId);
            setAuthor(userData);
          } catch {
          }
        }

        setError(null);
      } catch (err) {
        console.error(err);
        setError('Failed to load post details. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    loadPostAndComments();
  }, [id]);

  if (loading) {
    return <p className="loading">Loading post...</p>;
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

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="post-detail-page">
      <Link to="/posts" className="back-link">
        ← Back to Posts
      </Link>

      <article className="post-full">
        <h1>{post.title}</h1>

        <div className="post-meta">
          <span>Post #{post.id}</span>
          {author && (
            <span>
              {' '}• Author:{' '}
              <Link to={`/users/${author.id}`} className="author-link">
                {author.name}
              </Link>
            </span>
          )}
        </div>

        <p className="post-full-body">{post.body}</p>
      </article>

      <section className="comments-section">
        <h3>Comments ({comments.length})</h3>

        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <div className="comments-list">
            {comments.map((comment) => (
              <div key={comment.id} className="comment-card">
                <h4 className="comment-name">{comment.name}</h4>
                <p className="comment-email">By: {comment.email}</p>
                <p className="comment-body">{comment.body}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default PostDetail;
