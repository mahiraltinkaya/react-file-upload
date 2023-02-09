import React from "react";

import { UploadContainer } from "./UploadContainer";

function App() {
  const [files, setFiles] = React.useState<File[]>([]);

  return (
    <div className="App" style={{ padding: 20 }}>
      <UploadContainer
        setFiles={setFiles} // setFiles function
        files={files} // files array
        limit={10}
        maxsize={2} // in MB
        // default allowed types
        allowedTypes={[
          "image/png",
          "image/jpg",
          "image/jpeg",
          "image/webp",
          "image/svg+xml",
        ]}
      ></UploadContainer>
    </div>
  );
}

export default App;
