import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Logo from "../../assets/img/web-logo.png";

const SignUp = () => {
  const navigate = useNavigate();

  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const tailLayout = {
    wrapperCol: {
      span: 24,
    },
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleClose = () => {
    navigate("/");
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <div className="SignUp">
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="form-signUp"
      >
        <div className="logo">
          <img className="img" src={Logo} alt="" />
        </div>

        <div className="title">
          Sign up to get more offers, buy tickets and information security.
        </div>

        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button className="btnSignup" type="primary" htmlType="submit" danger>
            SignUp
          </Button>
        </Form.Item>

        <div className="footer">
          <span className="footer__text">Do have an account ?</span>
          <button className="footer__btn" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
        <div className="containerBtn">
          <button type="button" className="btnCancel" onClick={handleClose}>
            X
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
