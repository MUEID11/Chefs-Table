import { useState, useEffect } from "react";
import Recipe from "./Recipe";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function loadData() {
      const getData = await fetch("./../public/recipe.json");
      const data = await getData.json();
      setRecipes(data);
    }
    loadData();
  }, []);

  return (
    <>
      <div className="container mx-auto sm:flex">
        <div className="lg:w-2/3">
          <h4>recipe: {recipes.length}</h4>
          <div className="lg:grid grid-cols-2 gap-16 flex-col">
            {recipes.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe}></Recipe>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3">
          <h4>orders</h4>
        </div>
      </div>
    </>
  );
};

export default Recipes;
