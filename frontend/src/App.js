import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios.get('/api/files')
      .then(response => setFiles(response.data))
      .catch(error => console.error('Error fetching files:', error));
  }, []);


  return (
    <div>
      <h1>Available Files</h1>
      <ul>
        {files.map(file => (
          <li key={file}>
            <a 
              href={`http://localhost:5000/files/${file}`} 
              download={file}  // This forces the file to download instead of opening it
            >
              {file}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
