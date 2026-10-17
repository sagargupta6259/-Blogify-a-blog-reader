const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
};

export const fetchPostById = async (id) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
};

export const fetchCommentsByPostId = async (id) => {
  const res = await fetch(`${BASE_URL}/posts/${id}/comments`);
  if (!res.ok) {
    throw new Error('Failed to fetch comments');
  }
  return res.json();
};

export const fetchUserById = async (id) => {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }
  return res.json();
};

export const fetchPostsByUserId = async (userId) => {
  const res = await fetch(`${BASE_URL}/posts?userId=${userId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch user posts');
  }
  return res.json();
};
