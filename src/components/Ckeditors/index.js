import React, { useEffect, useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { convertFileToBase64 } from "@utility/common";
// import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";

// @utility
import { uploadImg } from "@utility/UploadImg";

const Ckeditor = ({ placeholder, des = "", onChange = () => {} }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value) {
      onChange(value);
    }
  }, [value]);

  return (
    <CKEditor
      editor={ClassicEditor}
      data={des}
      onChange={(event, editor) => {
        const data = editor.getData();
        setValue(data);
        // console.log({ event, editor, data });
      }}
      config={{
        placeholder,
        extraPlugins: [MyCustomUploadAdapterPlugin],
        // plugins: [Alignment],
        // toolbar: ["bold", "italic", "alignment"],
        toolbar: {
          items: [
            "exportPDF",
            "exportWord",
            "|",
            "findAndReplace",
            "selectAll",
            "|",
            "heading",
            "|",
            "bold",
            "italic",
            "strikethrough",
            "underline",
            "code",
            "subscript",
            "superscript",
            "removeFormat",
            "|",
            "bulletedList",
            "numberedList",
            "todoList",
            "|",
            "outdent",
            "indent",
            "|",
            "undo",
            "redo",
            "-",
            "fontSize",
            "fontFamily",
            "fontColor",
            "fontBackgroundColor",
            "highlight",
            "|",
            "alignments",
            "|",
            "link",
            "insertImage",
            "blockQuote",
            "insertTable",
            "mediaEmbed",
            "codeBlock",
            "htmlEmbed",
            "|",
            "specialCharacters",
            "horizontalLine",
            "pageBreak",
            "|",
            "textPartLanguage",
            "|",
            "sourceEditing",
          ],
          shouldNotGroupWhenFull: true,
        },
        // toolbar: {
        //   // items: [
        //   //   "bold",
        //   //   "italic",
        //   //   "undo",
        //   //   "redo",
        //   //   "link",
        //   //   "|",
        //   //   "imageUpload",
        //   //   "blockQuote",
        //   //   "insertTable",
        //   //   "mediaEmbed",
        //   //   // "underline",
        //   //   // "strikethrough",
        //   //   // "bulletedList",
        //   //   // "numberedList",
        //   //   // "outdent",
        //   //   // "indent",
        //   //   // "alignment", //
        //   //   // // "|",
        //   //   // "specialCharacters", //
        //   //   // "ChemType", //
        //   //   // "removeFormat", //
        //   //   // "fontColor", //
        //   //   // "fontBackgroundColor", //
        //   //   // "heading",
        //   // ],
        // },
      }}
      // onReady={(editor) => {
      //   // You can store the "editor" and use when it is needed.
      //   console.log("Editor is ready to use!", editor);
      // }}
      // onBlur={(event, editor) => {
      //   console.log("Blur.", editor);
      // }}
      // onFocus={(event, editor) => {
      //   console.log("Focus.", editor);
      // }}
    />
  );
};

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader);
  };
}

class MyUploadAdapter {
  constructor(props) {
    this.loader = props;
  }

  // Starts the upload process.
  async upload() {
    return this.loader.file.then((uploadedFile) => {
      return new Promise(async (resolve, reject) => {
        const encodeBase64 = await convertFileToBase64(uploadedFile);
        try {
          const res = await uploadImg(encodeBase64?.base64);
          if (res?.status === 200) {
            const { secure_url, ...rest } = res?.data;
            resolve({ default: secure_url });
          }
        } catch (err) {
          reject("Upload failed");
        }
      });
    });
  }
}

export default Ckeditor;
