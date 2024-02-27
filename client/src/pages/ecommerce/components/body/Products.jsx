import React, { useState, useEffect } from "react";
import Product from "../all_products.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useUser } from "../../../user/UserContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import all_accessories from "../all_accessories.jsx";

function Products() {
  const { user } = useUser();
  // const [products, setProducts] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(`https://gvk-ecommerce-api.onrender.com/api/v2/ecommerce/fetchProducts`);

  //     const data = await response.json();
  //     if (data.success === true) {
  //       setProducts(data.allpro);
  //     } else {
  //       console.error('Error fetching product data');
  //     }
  //   }catch (error) {
  //     console.error('Fetch error:', error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const addToWishlist = async(productId) => {
  //   try{
  //     const res = await axios.post(`http://localhost:9002/api/v2/ecommerce/addToWishlist`,{productId: productId,
  //     user:user});
  //     if(res.data.success === true){
  //       toast.success('Product Added to Wishlist successfully!', {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //       console.log("product added successfully")
  //     }
  //   }
  //   catch (error) {
  //     console.error('Fetch error:', error.message);
  //   }
  // }
  const handleAddToCart = async (productId) => {
    try {
      const response = await axios.post(
        "http://localhost:9002/api/v2/ecommerce/addToCart",
        {
          productId: productId,
          user: user,
        }
      );
      console.log(response);
      if (response.data.success === true) {
        toast.success("Product Added to cart successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        console.error("Error adding product to cart");
      }
    } catch (error) {
      console.error("Add to cart error:", error.message);
    }
  };

  return (
    <>
      <div className="col">
        {Product.slice(0, 4).map((product) => (
          <div key={product._id} style={{ marginBottom: "30px" }}>
            <div>
              <img
                src={product.imgURL}
                alt={product.name}
                style={{ width: "250px", height: "325px" }}
              />
            </div>
            <div>
              <div>{product.name}</div>
              <div>${product.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <h2
          style={{
            color: "#E9EFE7",
            fontSize: "40px",
            textAlign: "left",
            paddingLeft: "50px",
          }}
        >
          Accessories
        </h2>
        <hr style={{ borderBottom: "4px solid white", marginBottom: "50px" }} />
      </div>

      <div className="col">
        {all_accessories.slice(0, 4).map((product) => (
          <div key={product._id} style={{ marginBottom: "30px" }}>
            <div>
              <img
                src={product.imgURL}
                alt={product.name}
                style={{ width: "250px", height: "325px" }}
              />
            </div>
            <div>
              <div>{product.name}</div>
              <div>${product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
