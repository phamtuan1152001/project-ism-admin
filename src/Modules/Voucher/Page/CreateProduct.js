import "../bootstrap.scss";
import "../responsive.scss";

import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useHistory, useLocation } from "react-router-dom";
import moment from "moment";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { convertFileToBase64 } from "../../../utility/common";

// @utility
import { uploadImg } from "../../../utility/UploadImg";

// @components
import {
  Form,
  Input,
  Button,
  notification,
  Select,
  DatePicker,
  Modal,
  Upload,
  message,
  Spin,
} from "antd";
const { Option } = Select;
import { PlusOutlined } from "@ant-design/icons";

// @service
import {
  createProduct,
  getDetailProduct,
  updateProduct,
} from "../Store/service";

// @constants
import { RETCODE_SUCCESS } from "@configs/contants";

const CreateProduct = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const location = useLocation();

  const { idProduct } = location.state || {};

  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const [imgBase64, setImgBase64] = useState();
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const [description, setDescription] = useState("");

  useEffect(() => {
    if (idProduct) {
      fetchDetailProduct();
    }
  }, []);

  // useEffect(async () => {
  //   if (imgBase64) {
  //     try {
  //       setLoadingUpload(true);
  //       const res = await uploadImg(imgBase64);
  //       if (res?.status === 200) {
  //         const listImg = {
  //           uid: res?.data?.version_id,
  //           url: res?.data?.secure_url,
  //         };
  //         setFileList((prev) => [...prev, listImg]);
  //         setImgBase64();
  //       }
  //     } catch (err) {
  //       console.log("FETCH FAIL!", err);
  //     } finally {
  //       setLoadingUpload(false);
  //     }
  //   }
  // }, [imgBase64]);

  const fetchDetailProduct = async () => {
    try {
      const res = await getDetailProduct({
        idProduct,
      });
      if (res?.data?.retCode === RETCODE_SUCCESS) {
        onInitData(res?.data?.retData);
      }
    } catch (err) {
      console.log("FETCH FAIL!", err);
    }
  };

  const onInitData = (dataProduct) => {
    if (dataProduct && Object.keys(dataProduct).length > 0) {
      const {
        name,
        description,
        price,
        gender,
        age,
        weight,
        location,
        dob,
        image,
      } = dataProduct || {};
      setFileList(image);
      form.setFieldsValue({
        dob: moment(dob),
        name,
        description,
        price,
        gender,
        age,
        weight,
        location,
        // dob,
      });
    }
  };

  const disabledDate = (current) => {
    const LIMIT_YEAR = 1900;
    return current && current.year() < LIMIT_YEAR;
  };

  const onFinish = async (values) => {
    // console.log("values", values);
    const { dob, image, ...rest } = values || {};
    try {
      setLoading(true);
      const { data } = idProduct
        ? await updateProduct({
            idProduct,
            dob: moment(dob).format(),
            image: fileList,
            ...rest,
          })
        : await createProduct({
            dob: moment(dob).format(),
            image: fileList,
            ...rest,
          });

      if (data?.retCode === RETCODE_SUCCESS) {
        notification.success({
          message: "Successfully",
          description: data?.retText,
          duration: 2,
        });
        setTimeout(() => {
          history.push("/manage-products");
        }, 1000);
      } else {
        notification.error({
          message: "Fail",
          description: "Create fail",
          duration: 2,
        });
      }
    } catch (err) {
      console.log("FETCH FAIL!", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = () => {
    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
    const hasValues = form.getFieldsValue();
    console.log("test", { hasValues, description });
    setIsDisable(hasErrors || !hasValues?.name || !description);
  };

  return (
    <div className="create-product">
      <div className="mb-3">
        <h1 className="create-product__title">Create voucher</h1>
      </div>
      <div className="create-product__formCreate">
        <Form
          form={form}
          name="login"
          layout="vertical"
          onFinish={onFinish}
          onFieldsChange={handleFormChange}
          className="box-form row"
          requiredMark={false}
        >
          <Form.Item
            name="name"
            className="form-custom col-12 ps-3 pe-3"
            label={`Voucher name`}
            rules={[
              {
                required: true,
                message: "Please, enter your voucher name",
              },
            ]}
          >
            <Input
              autoFocus
              className="input-field"
              placeholder={`Enter your product name`}
            />
          </Form.Item>

          <Form.Item
            name="description"
            className="form-custom col-12 ps-3 pe-3"
            label={`Description`}
            rules={[
              {
                required: true,
                message: "Please, enter your description",
              },
            ]}
          >
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onChange={(event, editor) => {
                const data = editor.getData();
                // console.log({ event, editor, data });
                setDescription(data);
              }}
              config={{
                // placeholder,
                // placeholder: contentPlaceholder,
                extraPlugins: [MyCustomUploadAdapterPlugin],
                toolbar: {
                  items: [
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "link",
                    "bulletedList",
                    "numberedList",
                    "|",
                    "outdent",
                    "indent",
                    "alignment",
                    "|",
                    "imageUpload",
                    "blockQuote",
                    "insertTable",
                    "mediaEmbed",
                    "undo",
                    "redo",
                    "specialCharacters",
                    "ChemType",
                    "removeFormat",
                    "fontColor",
                    "fontBackgroundColor",
                  ],
                },
                language: "vi",
                image: {
                  resizeUnit: "px",
                  toolbar: [
                    "resizeImage",
                    // "imageStyle:alignLeft",
                    // "imageStyle:alignCenter",
                    // "imageStyle:alignRight",
                    // "|",
                    // "imageStyle:full",
                    // "imageStyle:side",
                    // "|",
                    // "imageTextAlternative",
                  ],
                  styles: [
                    "full",
                    "side",
                    "alignLeft",
                    "alignCenter",
                    "alignRight",
                  ],
                  resizeOptions: [
                    {
                      name: "imageResize:original",
                      label: "Original",
                      value: null,
                    },
                    {
                      name: "imageResize:50",
                      label: "50px",
                      value: "50",
                    },
                    {
                      name: "imageResize:75",
                      label: "75px",
                      value: "75",
                    },
                  ],
                },
                table: {
                  contentToolbar: [
                    "tableColumn",
                    "tableRow",
                    "mergeTableCells",
                  ],
                },
                isReadOnly: false,
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
          </Form.Item>

          {/* <Form.Item
            name="dob"
            className="form-custom col-6 ps-3 pe-3"
            label={`Day of birth`}
            rules={[
              {
                required: true,
                message: "Please, enter your day of birth",
              },
            ]}
          >
            <DatePicker
              disabledDate={disabledDate}
              placeholder={`Enter your day of birth`}
              className="w-100 custome-antpicker"
              // suffixIcon={<ArrowDown />}
              // disabled
              // format={"DD/MM/YYYY"}
              // onChange={handleBirthDayChange}
            />
          </Form.Item> */}

          <div className="d-flex flex-row justify-content-end align-items-center">
            <Button
              className={classNames({
                "submit-btn": true,
                disable: idProduct ? false : isDisable,
              })}
              disabled={idProduct ? false : isDisable}
              loading={loading}
              htmlType="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
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

export default CreateProduct;
