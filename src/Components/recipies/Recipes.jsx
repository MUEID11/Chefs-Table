import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Orders from "./Orders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cooking, setCooking] = useState([]);
  useEffect(() => {
    async function loadData() {
      const getData = await fetch("recipe.json");
      const data = await getData.json();
      setRecipes(data);
    }
    loadData();
  }, []);

  const handleAddOrders = (item) => {
    const isExists = orders.find((ordered) => ordered.id === item.id);
    if (!isExists) {
      setOrders([...orders, item]);
    } else {
      toast(`Order ${item.recipe_name} is now in the queue. Please wait.🕐`);
    }
  };
  const handleCooking = (cook) =>{
    setCooking([...cooking, cook]);
    const removeData = orders.filter(ordered=> ordered.id !== cook.id);
    setOrders(removeData);
  }
  return (
    <>
      <div className="container mx-auto sm:flex">
        <div className="lg:w-2/3">
          <div className="lg:grid grid-cols-2 gap-16 flex-col">
            {recipes.map((recipe) => (
              <Recipe
                key={recipe.id}
                recipe={recipe}
                handleAddOrders={handleAddOrders}
                
              ></Recipe>
            ))}
          </div>
        </div>
        <Orders orders={orders} handleCooking={handleCooking} cooking={cooking}/>
      </div>
      <ToastContainer />
    </>
  );
};

export default Recipes;
