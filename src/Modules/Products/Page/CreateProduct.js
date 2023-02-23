import "../bootstrap.scss";
import "../responsive.scss";

import React, { useState } from "react";

// @
// import { cloudinaryUpload } from "../Store/uploadCloud";

import axios from "axios";
const API_URL = "http://localhost:3000";

import { uploadImgProduct } from "../Store/service";

const CreateProduct = () => {
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const [previewSouce, setPreviewSource] = useState();
  // console.log("previewSouce", previewSouce);
  const handleChangeImg = (e) => {
    const file = e.target.files[0];

    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitImg = (e) => {
    if (!previewSouce) return;
    uploadImg(previewSouce);
  };

  const uploadImg = async (base64ImgEncode) => {
    try {
      const res = await uploadImgProduct({ data: base64ImgEncode });
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    }

    // try {
    //   await fetch("http://localhost:3000/upload/upload-cloudinary", {
    //     method: "POST",
    //     body: JSON.stringify({ data: base64ImgEncode }),
    //     headers: { "Content-type": "application/json" },
    //   });
    // } catch (err) {
    //   console.log("err", err);
    // }
  };

  return (
    <div className="create-product">
      <div className="mb-3">
        <h1 className="create-product__title">Create product</h1>
      </div>

      <div className="create-product__formCreate">
        <h2>son tua</h2>

        <input type="file" onChange={handleChangeImg} value={fileInputState} />

        <button onClick={(e) => handleSubmitImg(e)}>Submit</button>

        {previewSouce && <img src={previewSouce} alt="previe image" />}
      </div>
    </div>
  );
};

export default CreateProduct;
