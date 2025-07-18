import { Link } from "react-router";
import Loader from "../../../components/Loader";
import Title from "../../../components/Title";
import {
  useGetAllCategoriesQuery,
  useGetAllProductsQuery,
} from "../../../redux/api/baseApi";
import {
  type ICategoryProps,
  type IProduct,
} from "c:/Job Task/fresh-harvest/Type";

const ProductSection = () => {
  const { data: products, isLoading: isProductLoading } =
    useGetAllProductsQuery(undefined);
  const { data: categoriess, isLoading: isCategoriesLoading } =
    useGetAllCategoriesQuery(undefined);

//   console.log(products);
//   console.log(categoriess);

  //   const categories = ["All", "Fruits", "Vegetables", "Salad"];

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Tag */}
        <div className="flex justify-center">
          <Title title={"Our Products"} />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-2 text-slate-800">
          Our Fresh Products
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>

        {/* Category Filters */}
        {isCategoriesLoading ? (
          <Loader />
        ) : (
          <div className="flex justify-center gap-2 flex-wrap mb-10">
            {categoriess?.data?.map((cat: ICategoryProps) => (
              <button
                key={cat?.id}
                className={`px-4 py-2 rounded-md text-sm font-medium border transition capitalize`}
              >
                {cat?.categoryName}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {isProductLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products?.data?.map((product: IProduct) => (
              <div
                key={product?.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col items-center justify-between"
              >
                {product?.images.map((img: string, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={product?.productName}
                    className="h-24 object-contain"
                  />
                ))}

                <h3 className="font-semibold text-slate-800 mt-2">
                  {product?.productName}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{product.price}</p>
                <Link className="w-full" to={`/shop/${product?.id}`}>
                  <button className="py-1 text-white rounded-md w-full bg-orange-400 hover:bg-orange-500 transition-colors duration-300 hover:cursor-pointer">
                    Add to cart
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-10">
          <button className="px-6 py-2 rounded-md border border-orange-500 text-orange-500 font-semibold hover:bg-orange-50 transition hover:cursor-pointer">
            See All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
