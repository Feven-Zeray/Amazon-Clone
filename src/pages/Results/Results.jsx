import React, { useEffect, useState } from "react";
import classes from "./results.module.css";
import LayOut from "../../Component/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import Loader from "../../Component/Loader/Loader";
import ProductCard from "../../Component/Product/ProductCard";

function Results() {
  const [results, setResults] = useState([]);
   const [isLoading, setisLoading] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    setisLoading(true)
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setisLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}> Category / {categoryName}</p>
        <hr />
        {isLoading? (
          <Loader />
        ) : (
          <div className={classes.products__container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDisc={false}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
