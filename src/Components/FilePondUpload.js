import React, { useState } from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function FilePondUpload() {
  const [files, setFiles] = useState([]);

  return (
    <div className="container mt-4">
      <p className="mb-3 text-small muted" style={{fontFamily:"Roboto Mono, monospace", color:"var(--font-color)"}}>**Below you will get a preview of the attached file**</p>
      <FilePond
        name="cover"
        allowImagePreview={true}
        allowMultiple={true}
        files={files}
        onupdatefiles={setFiles}
        maxFiles={5}
        instantUpload={true}
        allowReorder={true}
        server="/" // File upload api goes here
      />
    </div>
  );
}
export default FilePondUpload;
