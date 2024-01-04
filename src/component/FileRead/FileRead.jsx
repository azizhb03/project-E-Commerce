import React, { useState, useEffect } from 'react';

const FileRead = () => {
  const [, setFileContent] = useState('');

  useEffect(() => {
    const file_path = 'example.txt';

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/files/${file_path}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
        }

        const content = await response.text();
        setFileContent(content);
      } catch (error) {
        console.error(`Error fetching file: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>File Content:</h1>
    </div>
  );
};

export default FileRead;
