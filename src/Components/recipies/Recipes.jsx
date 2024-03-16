import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Order from "./Order";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    async function loadData() {
      const getData = await fetch("./../public/recipe.json");
      const data = await getData.json();
      setRecipes(data);
    }
    loadData();
  }, []);

  const handleAddOrder =(item)=>{
    const newOrders = [...order, item]
    setOrder(newOrders)
  }
  return (
    <>
      <div className="container mx-auto sm:flex">
        <div className="lg:w-2/3">
          <div className="lg:grid grid-cols-2 gap-16 flex-col">
            {recipes.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe} handleAddOrder={handleAddOrder}></Recipe>
            ))}
          </div>
        </div>
        <Order order={order}/>
      </div>
    </>
  );
};

export default Recipes;
