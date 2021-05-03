import React, { useState, useEffect } from "react";
import axios from "axios";
// import TheNav from "../../components/NavBar";
// import "./style.css";
const URL = "http://localhost:3001/api/get";
// const URL2 = "/api/remove";
const Test = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get(URL);
    setRecipes(response.data);
  };
  // const removeData = (_id) => {
  //   axios.delete(`${URL2}/${_id}`).then((res) => {
  //     const del = recipes.filter((recipe) => _id !== recipe._id);
  //     setRecipes(del);
  //   });
  // };
  const renderHeader = () => {
    let headerElement = ["Recipe", "Author", "Description", " "];
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };
  const renderBody = () => {
    return (
      recipes &&
      recipes.map(({ _id, recipe_name, author_name, recipe_description }) => {
        return (
          <tr key={_id}>
            <td>{recipe_name}</td>
            <td>{author_name}</td>
            <td>{recipe_description}</td>
            <td className="opration">
              {/* <button className="button" onClick={() => removeData(_id)}>
                Delete
              </button> */}
            </td>
          </tr>
        );
      })
    );
  };
  return (
    <>
      {/* <TheNav /> */}
      <h1 id="title">React Table</h1>
      <table id="employee">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </>
  );
};
export default Test;
