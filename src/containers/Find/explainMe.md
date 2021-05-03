* TheFind component is being call on line 8. Within TheFind component, the recipe state is called within a const and useState containing an empty objct within the method is assigned to the state. 


* On line 10, the useEffect method containing an arrow function holds the api get route axiURL const. Right below the axiURL const, the axios call is called to the get method holding the axiURL const within the parameter. A promise is then called, within the parameter of the promise, the code is asking for a response back within an arrow function from the axios get call. In that same function, setRecipes state is going to deliver a response of the data within that state. Lastly, the cath method is added to catch and log any errors that'll occur during the run of the function. 


* An arrow function is then assigned to the renderHeader const. With the function, an object array containing 'Recipe Name', 'Creator', ' Description', and 'Edit' is assigned to the headerTitle let variable. On line 26, the headerTitle will be mapped out and with the mapping method, key and index is being called within the parameter. In that very same function, it's calling for the key and index to be returned in the element of a table header in all upper case letters. 

* An arrow function is assigned to the renderBody const. The code within the function is basically saying to return the state of recipes to map out the data conained within the destructured array within the map method within a table by name, creator and description. 