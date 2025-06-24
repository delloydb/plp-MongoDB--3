// Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          ReactTasks
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:underline">
            Home
          </Link>
          <Link to="/tasks" className="text-gray-700 dark:text-gray-300 hover:underline">
            Tasks
          </Link>
          <Link to="/api" className="text-gray-700 dark:text-gray-300 hover:underline">
            API Data
          </Link>
        </div>
      </div>
    </nav>
  );
}
