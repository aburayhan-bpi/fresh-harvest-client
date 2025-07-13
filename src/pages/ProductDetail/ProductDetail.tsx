import Loader from "@/components/Loader";
import Title from "@/components/Title";
import {
  useGetAllCategoriesQuery,
  useGetSingleProductQuery,
} from "@/redux/api/baseApi";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite, MdStarRate } from "react-icons/md";
import { useParams } from "react-router";
import type { ICategoryProps } from "Type";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("tab1");
  const { id } = useParams();

  const { data, isLoading } = useGetSingleProductQuery(id);
  const { data: categoriess } = useGetAllCategoriesQuery(undefined);

  const product = data?.data;
  const categoryName = categoriess?.data?.find(
    (cat: ICategoryProps) => cat.id === product?.categoryId
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-10 mt-20">
          {/* Top section */}
          <div className="lg:flex gap-10">
            {/* Image */}
            <div className="lg:w-1/2 w-full border rounded-md bg-white p-4">
              <img
                className="w-full h-[400px] object-contain rounded"
                src={product?.images || "/placeholder.jpg"}
                alt={product?.productName}
              />
            </div>

            {/* Details */}
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0 capitalize">
              <Title title={categoryName?.categoryName || "Category"} />
              <h2 className="text-4xl font-semibold mt-1 mb-3">
                {product?.productName}
              </h2>

              {/* Rating */}
              <div className="text-orange-500 flex items-center gap-1 text-sm mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, idx) => (
                    <MdStarRate key={idx} />
                  ))}
                <span className="text-black ml-2">
                  <span className="font-semibold">5.0</span> (1 review)
                </span>
              </div>

              {/* Price */}
              <h2 className="text-orange-500 font-semibold text-2xl mb-4">
                ${product?.price}/kg
              </h2>

              {/* Short description */}
              <p className="text-gray-700">{product?.description}</p>

              {/* Quantity selector */}
              <div className="mt-6 flex items-center gap-4">
                <label className="text-md font-medium">Quantity</label>
                <div className="flex items-center border rounded overflow-hidden">
                  <button
                    className="px-3 py-1 hover:bg-gray-200"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    -
                  </button>
                  <div className="w-12 text-center">{quantity}</div>
                  <button
                    className="px-3 py-1 hover:bg-gray-200"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>
                <span>/kg</span>
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex flex-wrap gap-4">
                <button className="flex items-center gap-2 px-6 py-2 border rounded text-gray-600 bg-gray-100 hover:bg-gray-200">
                  <MdFavorite className="text-xl" /> Save as favorite
                </button>
                <button className="flex items-center gap-2 px-6 py-2 rounded text-white bg-orange-500 hover:bg-orange-600">
                  <FaShoppingCart className="text-xl" /> Add to cart
                </button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-14">
            <div role="tablist" className="tabs tabs-bordered">
              <button
                role="tab"
                className={`tab ${activeTab === "tab1" ? "tab-active" : ""}`}
                onClick={() => setActiveTab("tab1")}
              >
                Description
              </button>
              <button
                role="tab"
                className={`tab ${activeTab === "tab2" ? "tab-active" : ""}`}
                onClick={() => setActiveTab("tab2")}
              >
                Reviews (1)
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              {activeTab === "tab1" && (
                <div
                  role="tabpanel"
                  className="bg-gray-50 p-4 rounded text-sm text-gray-700"
                >
                  {product?.description || (
                    <>
                      <p>
                        Our coconuts are sustainably grown, ensuring the best
                        quality and taste. Each coconut is handpicked and
                        carefully prepared, offering you the freshest product
                        possible.
                      </p>
                      <p className="mt-2">
                        Whether you’re using the water, flesh, or milk, our
                        coconuts bring versatility to your kitchen while
                        supporting healthy living.
                      </p>
                    </>
                  )}
                </div>
              )}

              {activeTab === "tab2" && (
                <div
                  role="tabpanel"
                  className="bg-gray-50 p-4 rounded text-sm text-gray-700"
                >
                  <p className="italic text-gray-500">No reviews yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
