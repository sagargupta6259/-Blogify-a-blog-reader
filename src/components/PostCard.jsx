import { Link } from 'react-router-dom';

function PostCard({ post }) {
  const shortBody = post.body.length > 80 
    ? post.body.slice(0, 80) + '...' 
    : post.body;

  return (
    <div className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{shortBody}</p>
      <div className="post-card-footer">
        <Link to={`/posts/${post.id}`} className="read-more-link">
          Read More
        </Link>
        {post.userId && (
          <Link to={`/users/${post.userId}`} className="author-link">
            Author Profile
          </Link>
        )}
      </div>
    </div>
  );
}

export default PostCard;
