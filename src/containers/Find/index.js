import { Layout, Row, Col, Card } from "antd";
import Nav from "../../components/nav";
import TheButton from "../../components/button";
import { useEffect, useState } from "react";
import axios from "axios";

const { Content } = Layout;
const TheFind = () => {
  const [recipes, setRecipes] = useState([]);
     const axiUrl = "http://localhost:3001/api/get/";
     const axioURL = "http://localhost:3001/api/delete/";
  useEffect(() => {
 

    axios
      .get(axiUrl)
      .then((response) => {
       
        // setRecipes to the response data so it can be used to mapp
        setRecipes(response.data)
      })
      .catch((error) => console.log(error));
  });

  const renderHeader = () => {
    let headerTitle = ['Recipe Name', 'Creator', "Description", "Edit"];

    return headerTitle.map((key, index) => {
    return  <th key={index.id}>{key.toUpperCase()}</th>;
    });
  };

  
  const onClick = (_id) => {
      axios
      .delete(`${axioURL}/${_id}`)
      .then( res => { const deleteMe = recipes.filter(recipe => _id !== recipe._id)
      setRecipes(deleteMe)
    })
  }
    const renderBody = () => {
      return (
        // grabbing teh recipes state
        recipes &&
        // mapping the data to render
        recipes.map(({ _id, name, creator, description, ingredients, duration }) => {
          return (
            // in the table
            // <tr key={_id}>
            //   <td>{name}</td>
            //   <td>{creator}</td>
            //   <td>{description}</td>
            //   <td><button onClick={()=> onClick(_id)}>delete</button></td>
            // </tr>
            <Card key={_id} bordered={true} style={{ width: 300 }}>
              <h4>Recipe Name:</h4>
              <p>{name}</p>
              <h4>Creator:</h4>
              <p>{creator}</p>
              <h4>Duration:</h4>
              <p>{duration}</p>
              <h4>Ingredients:</h4>
              <p>{ingredients}</p>
              <h4>Description:</h4>
              <p>{description}</p>
              <button onClick={() => onClick(_id)}>delete</button>
            </Card>
          );
        })
      );
    };

  return (
    <>
      <Nav
        home={<TheButton to="/" name="Home" />}
        about={<TheButton to="/about" name="About" />}
        add={<TheButton to="/add" name="Add Recipe" />}
      />
      <h1 id="title">Find Recipes</h1>
      <table id="employee">
        {/* <thead>
          <tr>{renderHeader()}</tr>
        </thead> */}
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
};

export default TheFind;
