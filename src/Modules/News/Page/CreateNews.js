import "../bootstrap.scss";
import "../responsive.scss";

import React, { useState } from "react";
import classNames from "classnames";
import { useHistory, useLocation } from "react-router-dom";

// @components
import { Form, Input, Button, notification } from "antd";
import Ckeditor from "@components/Ckeditors";

// @service
import { createNews } from "../Store/service";

// @constants
import { RETCODE_SUCCESS } from "@configs/contants";

const CreateNews = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const onFinish = async (values) => {
    // console.log("values", values);
    try {
      setLoading(true);
      const { data } = await createNews({
        ...values,
      });

      if (data?.retCode === RETCODE_SUCCESS) {
        notification.success({
          message: "Successfully",
          description: data?.retText,
          duration: 2,
        });
        setTimeout(() => {
          history.push("/manage-news");
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
        !hasValues?.title ||
        !hasValues?.description ||
        !hasValues?.content
    );
  };

  return (
    <div className="create-product">
      <div className="mb-3">
        <h1 className="create-product__title">Create product</h1>
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
            name="title"
            className="form-custom col-6 ps-3 pe-3"
            label={`New's title`}
            rules={[
              {
                required: true,
                message: "Please, enter news title",
              },
            ]}
          >
            <Input
              autoFocus
              className="input-field"
              placeholder={`Enter news title`}
            />
          </Form.Item>

          <Form.Item
            name="description"
            className="form-custom col-6 ps-3 pe-3"
            label={`New's description`}
            rules={[
              {
                required: true,
                message: "Please, enter news description",
              },
            ]}
          >
            <Input
              className="input-field"
              placeholder={`Enter news description`}
            />
          </Form.Item>

          <Form.Item
            name="content"
            className="form-custom col-12 ps-3 pe-3"
            label={`New's content`}
            rules={[
              {
                required: true,
                message: "Please, enter news content",
              },
            ]}
          >
            <Ckeditor placeholder={"Enter news content"} />
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

export default CreateNews;
