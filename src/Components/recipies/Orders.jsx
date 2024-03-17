import PropTypes from "prop-types";
import Order from "./Order";

const Orders = ({ orders, handleCooking, cooking }) => {
  let totaltime = 0;
  let totalCalories = 0;

  cooking.forEach((a) => {
    totaltime += a.preparing_time;
    totalCalories += a.calories;
  });
  return (
    <>
      <div className="lg:w-1/3 h-auto border rounded-xl sm:ml-8 sm:p-8 lg:mt-0 mt-4">
        <div>
          <h4 className="text-center font-bold text-2xl">
            Want To Cook:{orders.length}
          </h4>
          <hr className="my-4" />
          <div className="sm:flex justify-between flex-col">
            <div className="overflow-x-auto">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="p-2">Item</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Time</th>
                  <th className="p-2">Calories</th>
                  <th className="p-2">Cook</th>
                </tr>
              </thead>

              {orders.map((order, idx) => (
                <Order key={order.id} idx={idx} order={order} handleCooking={handleCooking} />
              ))}
            </table>
            </div>
            
          </div>
        </div>
        <div className="mt-10">
          <h4 className="text-center font-bold text-2xl">Currently Cooking:{cooking.length}</h4>
          <hr className="my-4" />
          <div className="flex justify-evenly">
            <table className="table-auto w-full">
              <tr>
                <th className="p-2">Item</th>
                <th className="p-2">Name</th>
                <th className="p-2">Time</th>
                <th className="p-2">Calories</th>
              </tr>

              {cooking.map((cook, idx) => {
                return (
                  <>
                    <tr key={idx}>
                      <td className="py-2 px-4">{idx + 1}</td>
                      <td className="py-2 px-4">{cook.recipe_name}</td>
                      <td className="py-2 px-4">{cook.preparing_time} mins</td>
                      <td className="py-2 px-4">{cook.calories} Cals</td>
                    </tr>
                  </>
                );
              })}
              <tr>
                <td></td>
                <td></td>
                <td>Total time: {totaltime} min</td>
                <td>Total Calories: {totalCalories} cal</td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
Orders.propTypes = {
  orders: PropTypes.array,
  cooking: PropTypes.array,
  handleCooking: PropTypes.func,
};
export default Orders;
