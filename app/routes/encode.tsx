// app/routes/encode.tsx
import { useState } from "react";
import { Link } from "@remix-run/react";

export default function Upload() {
  const [filesData, setFilesData] = useState([]);

  const handleFileChange = async (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter(file => file.type.startsWith("image/"));
    if (validFiles.length !== files.length) {
      alert("Please upload valid image files only.");
      event.target.value = ""; // Clear the input
      return;
    }

    const filesDataPromises = validFiles.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve({ name: file.name, base64: reader.result });
      });
    });

    const filesData = await Promise.all(filesDataPromises);
    setFilesData(filesData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-l from-blue-500 to-purple-600 text-white p-4 transition ease-in-out">
      <h1 className="text-3xl font-bold mb-6">Encode Image to Base64</h1>
      <input 
        type="file" 
        accept="image/*"
        multiple
        onChange={handleFileChange} 
        className="mb-4 p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
      />
      {filesData.length > 0 && (
        <div className="w-full max-w-4xl"> 
          <p className="mb-2 font-medium">Base64 Output:</p>
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 w-1/3">File Name</th>
                <th className="border border-gray-300 p-2 w-2/3">Base64</th>
              </tr>
            </thead>
            <tbody>
              {filesData.map((fileData, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{fileData.name}</td>
                  <td className="border border-gray-300 p-2">
                    <textarea 
                      value={fileData.base64} 
                      readOnly 
                      rows={10}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Link 
        to="/" 
        className="mt-8 px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100 transition-transform transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}