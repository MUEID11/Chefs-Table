const Order = ({order}) => {
    
  return (
    <>
      <div className="lg:w-1/3 h-auto border rounded-xl sm:ml-8 sm:p-8 lg:mt-0 mt-4">
        <div>
          <h4 className="text-center font-bold text-2xl">Want To Cook:{order.length}</h4>
          <hr className="my-4" />
          <div className="flex justify-evenly">
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>
        </div>
        <div className="mt-10">
          <h4 className="text-center font-bold text-2xl">Currently Cooking:</h4>
          <hr className="my-4" />
          <div className="flex justify-evenly">
            <p>Name</p>
            <p>Time</p>
            <p>Calories</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;
