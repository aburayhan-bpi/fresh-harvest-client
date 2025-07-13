import { LuLoaderCircle } from "react-icons/lu";

const Loader = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <LuLoaderCircle className="animate-spin text-5xl text-orange-400" />
      </div>
    </div>
  );
};

export default Loader;
