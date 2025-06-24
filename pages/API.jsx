// ApiData.jsx
import { useEffect, useState } from 'react';
import Card from '../components/Card';

export default function ApiData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 10)))
      .catch(err => setError('Failed to load'))
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">API Data</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts"
        className="mb-4 px-3 py-2 border rounded w-full dark:bg-gray-800 dark:text-white"
      />
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map(post => (
          <Card key={post.id} title={post.title}>
            <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
