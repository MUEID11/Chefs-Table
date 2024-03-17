import { GiCampCookingPot } from "react-icons/gi";
import PropTypes from "prop-types";
const Order = ({ order, idx, handleCooking }) => {
  const { recipe_name, preparing_time, calories } = order;

  
  return (
    <tbody>
      <tr>
        <td className="py-2 px-4">{idx + 1}</td>
        <td className="py-2 px-4">{recipe_name}</td>
        <td className="py-2 px-4">{preparing_time} minutes</td>
        <td className="py-2 px-4">{calories} Calories</td>
        <td className="py-2 px-4">
          <button onClick={()=>handleCooking(order)} className="lg:text-5xl text-green-500">
            <GiCampCookingPot />
          </button>
        </td>
      </tr>
    </tbody>
  );
};
Order.propTypes = {
  order: PropTypes.object,
  idx: PropTypes.number,
  handleCooking: PropTypes.func,
};
export default Order;
