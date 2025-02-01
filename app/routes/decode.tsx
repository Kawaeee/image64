// app/routes/decode.tsx
import { useState } from "react";
import { Link } from "@remix-run/react";

export default function Decode() {
  const [base64, setBase64] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  const handleDecode = () => {
    if (base64.startsWith("data:image/")) {
      setImageSrc(base64);
    } else {
      alert("Please enter a valid Base64 encoded image string.");
      setImageSrc("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white p-4 transition ease-in-out">
      <h1 className="text-3xl font-bold mb-6">Decode Base64 to Image</h1>
      <textarea 
        value={base64} 
        onChange={(e) => setBase64(e.target.value)} 
        rows={5} 
        className="w-full max-w-lg mb-4 p-2 border border-gray-300 rounded" 
        placeholder="Enter Base64 string here..."
      />
      <button 
        onClick={handleDecode} 
        className="mb-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100 transition-transform transform hover:scale-105"
      >
        Convert to Image
      </button>
      {imageSrc && <img src={imageSrc} alt="Decoded" className="max-w-full max-h-screen rounded border border-gray-300" />}
      <Link 
        to="/" 
        className="mt-8 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100 transition-transform transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
