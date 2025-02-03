import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Image64" },
    { name: "description", content: "Convert images to Base64 and decode Base64 to images." },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white p-4 transition ease-in-out">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Image64</h1>
        <p className="text-lg">Easily convert images to Base64 and decode Base64 to images.</p>
      </header>
      <nav className="flex flex-col items-center gap-4">
        <Link 
          to="/encode" 
          className="px-6 py-3 bg-white text-blue-500 rounded shadow hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          Encode Image to Base64
        </Link>
        <Link
          to="/decode" 
          className="px-6 py-3 bg-white text-blue-500 rounded shadow hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          Decode Base64 to Image
        </Link>
      </nav>
    </div>
  );
}
