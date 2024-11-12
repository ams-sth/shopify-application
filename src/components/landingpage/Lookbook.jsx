import LookBook01 from "../../assets/images/lookbook/LookBook 01.jpg";
import LookBook02 from "../../assets/images/lookbook/LookBook 02.jpg";
import LookBook03 from "../../assets/images/lookbook/LookBook 03.jpg";

const Lookbook = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl">Our LookBook</h1>
      <p className="text-sm text-gray-500 pt-2">
        Create your own sets in different layouts
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8 px-4">
        <div>
          <img src={LookBook01} alt="LookBook 01" className="rounded-xl" />
        </div>
        <div>
          <img src={LookBook02} alt="LookBook 02" className="rounded-xl" />
        </div>
        <div>
          <img src={LookBook03} alt="LookBook 03" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
