// Layout.jsx
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main className="flex-grow px-4 py-6 max-w-5xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
