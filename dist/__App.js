import React from "react";
import { UploadContainer } from "./UploadContainer";
function App() {
    const [files, setFiles] = React.useState([]);
    return (React.createElement("div", { className: "App", style: { padding: 20 } },
        React.createElement(UploadContainer, { setFiles: setFiles, files: files, limit: 10, maxsize: 2, 
            // default allowed types
            allowedTypes: [
                "image/png",
                "image/jpg",
                "image/jpeg",
                "image/webp",
                "image/svg+xml",
            ], multiple: false })));
}
export default App;
