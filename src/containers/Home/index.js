// objective: Toreate a unique home page for clients to view upon loading
import { Layout, Row, Col, Card } from "antd";
import Nav from "../../components/nav";
import TheButton from "../../components/button";
import { BiFoodMenu, BiDish, BiGroup } from "react-icons/bi";
import './style.css';

import { Typography } from "antd";

const { Title } = Typography;


const { Content, Header } = Layout;
const Home = () => {

  const cardStyle = {
    height: "120px",
    width: "300px",
    float: "right",
    marginTop: "100px",
    marginRight: "20px",
    display: "flex",
  }


    return (
      <>
        <Nav
          //  using the component on line 7 to provide functioning value
          home={<TheButton to="/" name="Home" />}
          about={<TheButton to="/about" name="About" />}
          add={<TheButton to="/add" name="Add Recipe" />}
          find={<TheButton to="/find" name="Find Recipe" />}
          login={<TheButton to="/signin" name="Login" />}
        />
        <Content>
          <Row className="header">
            {/* <Col span={3}></Col> */}
            <Col span={8} />
            <Col>
              <Content>
                <div>
                  <Title className="recipe">R e c i p e A p p</Title>
                </div>
              </Content>
            </Col>
            <Col span={6} />
          </Row>

          <Row className="cardsrow">
            <Col span={24}>
              <Header >
                <Card style={cardStyle}>
                  <BiFoodMenu />
                  <h3>Browse Many Recipes by Categories</h3>
                </Card>
                <Card style={cardStyle}>
                  <BiDish />
                  <h3>Add Your Own Recipes</h3>
                </Card>
                <Card style={cardStyle}>
                  <BiGroup />
                  <h3>Become Part of Our Community</h3>
                </Card>
              </Header>
            </Col>
          </Row>
        </Content>
      </>
    );
}

export default Home;