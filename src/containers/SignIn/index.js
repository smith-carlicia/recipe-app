import Nav from "../../components/nav";
import TheButton from "../../components/button";
import Signup from "../Signup/index";
import { Form, Input, Button, Checkbox } from "antd";

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };
// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

// const Demo = () => {
//   const onFinish = (values: any) => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', errorInfo);
//   };

const Signin = () => {
  return (
    <>
      <Nav
        home={<TheButton to="/" name="Home" />}
        about={<TheButton to="/about" name="About" />}
        add={<TheButton to="/add" name="Add Recipe" />}
        find={<TheButton to="/find" name="Find Recipe" />}
      />

      <Form initialValues={{ remember: true }}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <TheButton
            type="text"
            to="/signup"
            name="No Account? Sign Up Here!"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Signin;
