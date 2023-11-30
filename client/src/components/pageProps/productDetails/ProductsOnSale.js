import React, { useState } from "react";
import { SplOfferData } from "../../../constants";
import axios from "axios";
import numeral from "numeral";

const ProductsOnSale = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Gợi Ý Sản Phẩm
      </h3>
      {relatedProducts.length < 1 && (
        <p className="text-center">Không tìm thấy sản phẩm tương tự</p>
      )}
      <div className="flex flex-col gap-2">
        {relatedProducts?.map((p) => (
          <div
            key={p._id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            <div>
              <img
                className="w-24"
                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                alt={p.name}
              />
            </div>
            <div className="flex flex-col gap-2 font-titleFont">
              <p className="text-base font-medium">{p.name}</p>
              <p className="text-sm font-semibold">
                {numeral(p?.price).format("0,0")} VNĐ
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOnSale;
