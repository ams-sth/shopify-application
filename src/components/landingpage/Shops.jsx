import { useSelector } from "react-redux";

const Shops = () => {
  const {shopImages} = useSelector((state) => state.shop);
  return (
    <div>
      <div className="container px-4 flex flex-col gap-12">
        <div>
          <h1 className="font-bold text-4xl">#@Shop By Instagram</h1>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 mx-auto gap-6">
          {shopImages.map((shop, index) => (
            <div key={index}>
              <img src={shop.image} alt={shop.name} className="rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shops;
