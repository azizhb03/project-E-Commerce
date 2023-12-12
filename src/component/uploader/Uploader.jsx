import React, { useEffect, useRef } from "react";

function Uploader() {
  const ref = useRef();
  const wref = useRef();

  useEffect(() => {
    ref.current = window.cloudinary;

    console.log("Upload", ref.current);
    wref.current = ref.current.createUploadWidget(
      {
        cloudName: "diqntq8l2",
        uploadPreset: "eekhymqm",
      },
      (err, res) => {
        console.log(res);
      }
    );
  }, []);
  return (
    <div>
      
      <button
        onClick={() => {
          wref.current.open();
        }}
      >
        upload
      </button>
    </div>
  );
}

export default Uploader;
