import React from "react";

import Input from "../components/input/index";
import RootForm from "../commons/form/index";
import { loginValidations } from "../configurations/Schemas";
import { Layout, Card, Row, Col, Icon } from "antd";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleChanged = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log("Login State", this.state);
    return (
      <Layout style={{ height: "100vh", justifyContent: "center" }}>
        <Row type="flex" justify="center" align="middle">
          <Col span={8}>
            <Card title="Login" headStyle={{ fontSize: 32 }}>
              <RootForm
                schemaName={loginValidations}
                initialValues={this.state}
                controls={[
                  {
                    span: 24,
                    name: "username",
                    value: this.state.username,
                    handleChanged: this.handleChanged,
                    placeholder: "Username",
                    Type: Input,
                    addonBefore: <Icon type="user" />
                  },
                  {
                    span: 24,
                    name: "password",
                    value: this.state.password,
                    handleChanged: this.handleChanged,
                    placeholder: "Password",
                    Type: Input,
                    addonBefore: <Icon type="lock" />
                  }
                ]}
                submitButton={{ span: 8, buttonText: "Log In" }}
                isLink={{
                  span: 8,
                  status: "true",
                  linktext: "Forgot Password?",
                  url: "#"
                }}
              />
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Login;
