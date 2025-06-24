// Card.jsx
export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4">
      {title && <h2 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}
