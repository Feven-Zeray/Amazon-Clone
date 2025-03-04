import React, { useEffect, useState } from "react";
import classes from "./productDetail.module.css";
import LayOut from "../../Component/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Component/Product/ProductCard";
import Loader from "../../Component/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <ProductCard
            product={product}
            flex={true}
            renderDesc={true}
            renderAdd={true}
          />
        )}
      </div>
    </LayOut>
  );
}
export default ProductDetail;
