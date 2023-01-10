import React, {useState } from "react";
import { useDropzone } from "react-dropzone";


const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16
};

function Dropzone(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map((file) => (
   
    props.setRandommeme(file.preview)


  ));

  return (
    <section className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        onClick={(e) => e.stopPropagation}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <div>
          <button type="button" onClick={open}>
            Open File Dialog
          </button>
          <button type="button" onClick={()=>props.setDrop(false)}>
            Close DropZone
          </button>
        </div>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}

export default Dropzone;
