import PropTypes from 'prop-types';
import { GiSandsOfTime } from "react-icons/gi";
import { AiOutlineFire } from "react-icons/ai";
const Recipe = ({ recipe, handleAddOrders }) => {
  const {
    recipe_name,
    recipe_img,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card w-auto sm:h-[700px] h-auto bg-base-100 shadow-xl text-gray-800 border">
        <figure className="sm:px-10 sm:pt-10 px-2 pt-2">
          <img
            src={recipe_img}
            alt={recipe_name}
            className="rounded-xl lg:h-[200px] lg:min-w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="text-gray-500">{short_description}</p>
          <div>
            <p className="font-bold">Ingredients: {ingredients.length}</p>
            <ul className="ml-5 p-2">
              {ingredients.map((ingredient, idx) => (
                <li className="list-disc" key={idx}>
                  {ingredient}
                </li>
              ))}
            </ul>
            <hr className="my-2" />
            <div className="flex justify-between">
              <span className="flex items-center">
                <GiSandsOfTime />
                {preparing_time} minutes
              </span>
              <span className="flex items-center">
                <AiOutlineFire />
                {calories} calories
              </span>
            </div>
            <button onClick={()=>handleAddOrders(recipe)} className="bg-green-500 py-2 px-4 rounded-full font-bold my-4">
              Want to cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Recipe.propTypes = {
   recipe: PropTypes.object.isRequired,
   handleAddOrders: PropTypes.func.isRequired,
}
export default Recipe;
