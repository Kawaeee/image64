// app/routes/upload.tsx
import { useState } from "react";

export default function Upload() {
  const [base64, setBase64] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => setBase64(reader.result);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Upload & Convert to Base64</h1>
      <input 
        type="file" 
        accept="image/*"
        onChange={handleFileChange} 
        className="mb-4 p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
      />
      {base64 && (
        <div className="w-full max-w-lg">
          <p className="mb-2 font-medium">Base64 Output:</p>
          <textarea 
            value={base64} 
            readOnly 
            rows={5} 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      )}
      <a 
        href="/" 
        className="mt-4 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100 transition-transform transform hover:scale-105"
      >
        Back to Home
      </a>
    </div>
  );
}