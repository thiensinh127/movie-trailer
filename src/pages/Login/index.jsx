import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Logo from "../../assets/img/web-logo.png";
import GoogleIcon from "../../assets/img/google-icon.png";
import { signInWithGoogle } from "../../services/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { usersReceived } from "../../feature/user/userSlice";
import { isEmpty } from "../../utils/ultils";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  console.log("🚀 ~ user", user);
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

  const handleSignUp = () => {
    navigate("/sign-up");
  };

  const handleSignInWithGoogle = async () => {
    const res = await signInWithGoogle();

    if (!isEmpty(res?.user)) {
      dispatch(usersReceived(res?.user));
    }
  };

  useEffect(() => {
    if (!isEmpty(user)) {
      navigate("/");
    }
  }, [JSON.stringify(user)]);

  return (
    <div className="Login">
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="form-login"
      >
        <div className="logo">
          <img className="img" src={Logo} alt="" />
        </div>

        <div className="title">
          Sign in to get more offers, buy tickets and information security.
        </div>

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
          <Button className="btnLogin" type="primary" htmlType="submit" danger>
            Login
          </Button>
        </Form.Item>

        <div className="footer">
          <Button className="btnGoogle" onClick={handleSignInWithGoogle}>
            <img src={GoogleIcon} alt="" />
            <span>Google Login</span>
          </Button>
        </div>

        <div className="footer">
          <span className="footer__text">Do not have an account ?</span>
          <button className="footer__btn" onClick={handleSignUp}>
            Sign up
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

export default Login;
