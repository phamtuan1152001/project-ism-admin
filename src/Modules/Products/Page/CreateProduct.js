import "../bootstrap.scss";
import "../responsive.scss";

import React, { useState } from "react";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import moment from "moment";

// @utility
import { uploadImg } from "../../../utility/UploadImg";

// @components
import { Form, Input, Button, notification, Select, DatePicker } from "antd";
const { Option } = Select;

// @service
import { createProduct } from "../Store/service";

// @constants
import { RETCODE_SUCCESS } from "@configs/contants";

const CreateProduct = () => {
  const [form] = Form.useForm();
  const history = useHistory();

  const [previewSouce, setPreviewSource] = useState();
  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const disabledDate = (current) => {
    const LIMIT_YEAR = 1900;
    return current && current.year() < LIMIT_YEAR;
  };

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

  const handleSubmitImg = async (e) => {
    if (!previewSouce) return;
    const { data } = await uploadImg(previewSouce);
    console.log("resImg", data);
  };

  const onFinish = async (values) => {
    // console.log("values", values);
    const { dob, ...rest } = values || {};
    try {
      setLoading(true);
      const { data } = await createProduct({
        dob: moment(dob).format(),
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
    setIsDisable(
      hasErrors ||
        !hasValues?.name ||
        !hasValues?.description ||
        !hasValues?.image ||
        !hasValues?.price ||
        !hasValues?.gender ||
        !hasValues?.age ||
        !hasValues?.weight ||
        !hasValues?.location ||
        !hasValues?.dob
    );
  };

  return (
    <div className="create-product">
      <div className="mb-3">
        <h1 className="create-product__title">Create product</h1>
        {/* <input type="file" onChange={handleChangeImg} />

        <button onClick={(e) => handleSubmitImg(e)}>Submit</button> */}
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
            className="form-custom col-6 ps-3 pe-3"
            label={`Product name`}
            rules={[
              {
                required: true,
                message: "Please, enter your product name",
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
            className="form-custom col-6 ps-3 pe-3"
            label={`Description`}
            rules={[
              {
                required: true,
                message: "Please, enter your description",
              },
            ]}
          >
            <Input
              className="input-field"
              placeholder={`Enter your description`}
            />
          </Form.Item>

          <Form.Item
            name="image"
            className="form-custom col-6 ps-3 pe-3"
            label={`Image`}
            rules={[
              {
                required: true,
                message: "Please, enter your product name",
              },
            ]}
          >
            <Input
              className="input-field"
              placeholder={`Enter your product name`}
            />
          </Form.Item>

          <Form.Item
            name="price"
            className="form-custom col-6 ps-3 pe-3"
            label={`Price`}
            rules={[
              {
                required: true,
                message: "Please, enter your price",
              },
            ]}
          >
            <Input
              type="number"
              className="input-field"
              placeholder={`Enter your price`}
            />
          </Form.Item>

          <Form.Item
            name="gender"
            className="form-custom col-6 ps-3 pe-3"
            label={`Gender`}
            rules={[
              {
                required: true,
                message: "Please, enter your gender",
              },
            ]}
          >
            <Select
              placeholder={"Enter your gender"}
              className="custom-select-text"
              // suffixIcon={<ArrowDown />}
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="age"
            className="form-custom col-6 ps-3 pe-3"
            label={`Age`}
            rules={[
              {
                required: true,
                message: "Please, enter your age",
              },
            ]}
          >
            <Input className="input-field" placeholder={`Enter your age`} />
          </Form.Item>

          <Form.Item
            name="weight"
            className="form-custom col-6 ps-3 pe-3"
            label={`Weight`}
            rules={[
              {
                required: true,
                message: "Please, enter your weight",
              },
            ]}
          >
            <Input className="input-field" placeholder={`Enter your weight`} />
          </Form.Item>

          <Form.Item
            name="location"
            className="form-custom col-6 ps-3 pe-3"
            label={`Location`}
            rules={[
              {
                required: true,
                message: "Please, enter your location",
              },
            ]}
          >
            <Input
              className="input-field"
              placeholder={`Enter your location`}
            />
          </Form.Item>

          <Form.Item
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
          </Form.Item>

          <div className="d-flex flex-row justify-content-end align-items-center">
            <Button
              className={classNames({
                "submit-btn": true,
                disable: isDisable,
              })}
              disabled={isDisable}
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

export default CreateProduct;
