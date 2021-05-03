// objective: To create a unique About page for clients to view upon loading
import { Layout, Row, Col, Card } from "antd";
import Nav from "../../components/nav/index";
// this imports the component button
import TheButton from '../../components/button';

// Add button that route to the add component 

const { Content } = Layout;
const About = () => {
  return (
    <>
      <Nav
        home={<TheButton to="/" name="Home" />}
        add={<TheButton to="/add" name="Add Recipe" />}
        find={<TheButton to="/find" name="Find Recipe" />}
      />

      <Content>
        {/* recipe app header */}
        <Row>
          <Col span={15} />
          <Col span={6}>
            <h1>About Recipe App</h1>
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row />
        <Row>
          <Col span={11}>
            <Card
              width="40px"
              height="450px"
              cover={
                <img
                  alt="cooking"
                  src="https://images.unsplash.com/photo-1607567087368-5bc5715c223d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                />
              }
            />
          </Col>
          <Col span={1}></Col>
          <Col span={10}>
            <h4>
              Recipe App is the perfect application for people to post and look
              up recipes to satisfy their hunger. This community serves as a
              location for people to connect and positively impact others
              through an age old past time, cooking.
            </h4>
          </Col>
          <Col span={2}></Col>
        </Row>
      </Content>
    </>
  );
};

export default About;
