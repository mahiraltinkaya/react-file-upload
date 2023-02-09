var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import "./index.scss";
const UploadContainer = (_a) => {
    var { title = "Drag & Drop your files here or click to select files", allowedTypes = [
        "image/png",
        "image/jpg",
        "image/jpeg",
        "image/webp",
        "image/svg+xml",
    ], files = [], limit, setFiles, children = null, maxsize, multiple = true } = _a, others = __rest(_a, ["title", "allowedTypes", "files", "limit", "setFiles", "children", "maxsize", "multiple"]);
    const [hightlight, setHightlight] = React.useState(false);
    const dropInput = React.useRef(null);
    const handleEvent = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    const onDragOver = (e) => {
        handleEvent(e);
    };
    const onDragEnter = (e) => {
        handleEvent(e);
        setHightlight(true);
    };
    const onDragLeave = (e) => {
        handleEvent(e);
        setHightlight(false);
    };
    const onDrop = (e) => {
        handleEvent(e);
        let dt = e.dataTransfer;
        let fileList = Array.from(dt.files);
        if (fileList.length > 0) {
            setFileObject(fileList);
        }
    };
    const handleInputChange = (e) => {
        const target = e.target;
        let fileList = Array.from(target.files);
        if (fileList.length > 0) {
            setFileObject(fileList);
        }
    };
    const setFileObject = (fileList) => {
        let total = 0;
        if (fileList.length > 0) {
            fileList = [...files, ...fileList].filter((item, index) => {
                total += item.size;
                return (allowedTypes.includes(item.type) &&
                    (limit ? limit > index : true) &&
                    (maxsize ? total < maxsize * 1024 * 1024 : true));
            });
            setFiles([...fileList]);
        }
        setHightlight(false);
    };
    const deleteSelectedImage = (index) => {
        const fileList = files.filter((_, i) => i !== index);
        if (dropInput.current) {
            dropInput.current.value = "";
        }
        setFiles(fileList);
    };
    const setPreviewUrl = (file) => {
        return URL.createObjectURL(file);
    };
    return (React.createElement("div", Object.assign({ className: "file__container" }, others),
        React.createElement("div", { className: "file_previews" }, files.map((item, index) => {
            return (React.createElement("div", { className: "preview", key: index },
                React.createElement("img", { src: setPreviewUrl(item), alt: "", width: 120, height: 60 }),
                React.createElement("button", { onClick: () => {
                        deleteSelectedImage(index);
                    } },
                    React.createElement("svg", { width: "20px", height: "20px", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("path", { fill: "red", d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z" })))));
        })),
        React.createElement("div", { className: "dropzone", onClick: () => { var _a; return (_a = dropInput.current) === null || _a === void 0 ? void 0 : _a.click(); }, onDragEnter: onDragEnter, onDragLeave: onDragLeave, onDragOver: onDragOver, onDrop: onDrop },
            children && children,
            !children && (React.createElement("div", { className: hightlight ? `dropline hightlight ` : "dropline" },
                React.createElement("svg", { fill: "#000000", width: "50px", height: "50px", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("title", null, "ionicons-v5-e"),
                    React.createElement("path", { d: "M450.29,112H142c-34,0-62,27.51-62,61.33V418.67C80,452.49,108,480,142,480H450c34,0,62-26.18,62-60V173.33C512,139.51,484.32,112,450.29,112Zm-77.15,61.34a46,46,0,1,1-46.28,46A46.19,46.19,0,0,1,373.14,173.33Zm-231.55,276c-17,0-29.86-13.75-29.86-30.66V353.85l90.46-80.79a46.54,46.54,0,0,1,63.44,1.83L328.27,337l-113,112.33ZM480,418.67a30.67,30.67,0,0,1-30.71,30.66H259L376.08,333a46.24,46.24,0,0,1,59.44-.16L480,370.59Z" }),
                    React.createElement("path", { d: "M384,32H64A64,64,0,0,0,0,96V352a64.11,64.11,0,0,0,48,62V152a72,72,0,0,1,72-72H446A64.11,64.11,0,0,0,384,32Z" })),
                React.createElement("div", { className: "information" }, title),
                React.createElement("div", { className: "information" }, maxsize && `max files size ${maxsize} mb.`))),
            React.createElement("input", { className: "file__input", type: "file", multiple: multiple, ref: dropInput, onChange: handleInputChange }))));
};
export { UploadContainer };
