import "../bootstrap.scss";

import React, { useState } from "react";
import classNames from "classnames";

// img
import Logo from "@src/assets/images/ism-image.png";
import { EyeOpenIcon, EyesClose } from "@Modules/Authenticate/assets/svg";

// @components
import { Form, Input, Button } from "antd";

const Authenticate = () => {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const onFinish = (values) => {
    console.log("values", values);
  };

  const handleFormChange = () => {
    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length);
    const hasValues = form.getFieldsValue();
    setIsDisable(hasErrors || !hasValues?.userName || !hasValues?.password);
  };

  return (
    <div className="login-wrapper">
      <div className="login-content">
        <div className="login-content__header">
          <div className="login-content__header-img">
            <img src={Logo} className="logo-img" alt="logo-img" />
          </div>
          <div className="login-content__header-title">
            <h2>Admin</h2>
            <h2>Monito Pets Store</h2>
          </div>
        </div>

        <div className="login-content__description">
          <h3>Welcome to Monito Pets Store</h3>
          <h4>Please verify your identity to continue</h4>
        </div>

        <div className="login-content__form">
          <Form
            form={form}
            name="login"
            layout="vertical"
            onFinish={onFinish}
            onFieldsChange={handleFormChange}
            className="box-form-login"
            requiredMark={false}
          >
            <Form.Item
              name="userName"
              className="form-custom col-12"
              label={`Username`}
              rules={[
                {
                  required: true,
                  message: "Please, enter your user name",
                },
                // {
                //   type: "email",
                //   message: "Vui lòng nhập đúng định dạng email",
                // },
                // {
                //   max: 20,
                //   message: "Tên đăng nhập không được vượt quá 100 kí tự",
                // },
              ]}
            >
              <Input
                // maxLength={101}
                autoFocus
                className="input-field"
                placeholder={`Enter your user name`}
              />
            </Form.Item>

            <Form.Item
              name="password"
              className="form-custom col-12"
              label={`Password`}
              rules={[
                {
                  required: true,
                  message: "Please, enter your password",
                },
                // {
                //   min: 3,
                //   message: "Mật khẩu không được nhỏ hơn 3 kí tự",
                // },
              ]}
            >
              <Input.Password
                // minLength={3}
                placeholder={`Enter your password`}
                className="input-field"
                iconRender={(visible) => {
                  return visible ? (
                    <EyeOpenIcon width={25} height={25} />
                  ) : (
                    <EyesClose width={25} height={25} />
                  );
                }}
              />
            </Form.Item>

            <div className="d-flex flex-row justify-content-center align-items-center">
              <Button
                loading={loading}
                disabled={isDisable}
                className={classNames({
                  "submit-form": true,
                  disable: isDisable,
                })}
                htmlType="submit"
              >
                Login
              </Button>
            </div>

            {/* <div className="d-flex flex-row justify-content-center align-items-center">
              <div className="box-login-footer">
                <h4 className="box-login-footer__text">
                  Quên tên đăng nhập/mật khẩu?{" "}
                  <span
                    onClick={() => {
                      history.push("/forgot-password");
                    }}
                  >
                    Lấy lại tại đây
                  </span>
                </h4>
              </div>
            </div> */}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
