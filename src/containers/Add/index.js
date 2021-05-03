// objective: Toreate a unique add page for clients to view upon loading
import { Layout } from "antd";
import Nav from "../../components/nav";
import { Form, Input, Col, Row, Card } from "antd";
import TheButton from "../../components/button/index";
import { useState } from "react";
import Test from "../../test/test";
import axios from "axios";


const { Content } = Layout;
const Add = () => {


   const [componentSize, setComponentSize] = useState("default");

   const onFormLayoutChange = ({ size }) => {
     setComponentSize(size);
   };
  // create a state that disctructors the schema (model)
  // template of key values pairs
  const [recipe, getRecipe] = useState({_id: '', recipe_name: '', recipe_creator: ''})
  // onchange method: to caputre the input values
  const onChange= (e) => {
    e.persist();
    // to grab the users input -> values & name (recipe: cake) (name:value)
    // here we create a new state for recipe and provide it target key values
    getRecipe({...recipe, [e.target.name]: e.target.value})
    console.log(e.target.name + ": " +e.target.value)
  }
  
  const urlToDB = "http://localhost:3001/api/adding/";

 
  const SaveTheRecipe = (e)  => { 
      e.preventDefault();
      
    const holdData = { name: recipe.recipe_name, 
      creator: recipe.recipe_creator,
      duration: recipe.recipe_duration,
      rating: recipe.recipe_rating,
      image: recipe.recipe_image,
      ingredients: recipe.recipe_indgredients,
      description: recipe.recipe_description};
// use axios and the data object to add (post) to the database 
    axios
      .post(
        urlToDB,
        holdData
      )
      .then((response) => {
        console.log(response.data);
        alert("saved");
      })
      .catch((err) => {
        console.log(err);
      });
  }
    return (
      <>
        <Nav
          home={<TheButton to="/" name="Home" />}
          about={<TheButton to="/about" name="About" />}
          find={<TheButton to="/find" name="Find Recipe" />}
          // test={<Test to="/test" name="Test" />}
        />
        <Content>
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Form.Item label="Recipe Name">
              <Input
                placeholder="Recipe Name"
                name="recipe_name"
                value={recipe.r_name}
                id="recipe_name"
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item label="Recipe Creator">
              <Input
                placeholder="Recipe Creator"
                name="recipe_creator"
                value={recipe.r_creator}
                id="recipe_creator"
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item label="Duration">
              <Input
                placeholder="Duration"
                name="recipe_duration"
                value={recipe.r_duration}
                id="recipe_duration"
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item label="Ingredients">
              <Input
                placeholder="Ingredients"
                name="recipe_ingredients"
                value={recipe.r_ingredients}
                id="recipe_ingredients"
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item label="Description">
              <Input
                placeholder="Description"
                name="recipe_description"
                value={recipe.r_description}
                id="recipe_description"
                onChange={onChange}
              />
            </Form.Item>
            <button onClick={SaveTheRecipe}>Save</button>
          </Form>

          <Row>
            <Col span={7} />
            <Col span={11}>
              <Card>
                <h2>Added Recipe goes here</h2>
              </Card>
            </Col>
            <Col span={6} />
          </Row>
        </Content>
      </>
    );
};

export default Add;