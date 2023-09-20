import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout.js";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/CategoryProduct.css"; 
import { useCart } from '../context/cart'
import toast from "react-hot-toast";

const CategoryProduct = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [cart,setCart]= useCart()
    useEffect(() => {
      if (params?.slug) getProductsByCat();
    }, [params?.slug]);
  
    const getProductsByCat = async () => {
      try {
        const { data } = await axios.get(
          `/api/v1/product/product-category/${params.slug}`
        );
        setProducts(data?.products);
        setCategory(data?.category);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <Layout>
        <div className="category">
          <h4 className="text-center">Category - {category?.name}</h4>
          <h6 className="text-center">{products?.length} result(s) found</h6>
          <div className="product-container">
            {products?.map((p) => (
              <div className="card2" key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card2-img-top img-fluid"
                  alt={p.name}
                />
                <div className="card2-body">
                  <h5 className="card2-title">{p.name}</h5>
                  <p className="card2-text">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card2-footer">
                    <div className="price">
                      {p.price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </div>
                    <button
                      className="btn btn-info"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                   
                    <button class="btn btn-secondary ms-1" 
                    onClick={() =>{setCart([...cart,p])
                    localStorage.setItem('cart', JSON.stringify([...cart,p]))
                    toast.success('item added to cart')
                    }}>
                    Add To Cart</button>
                  
</div>



                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  };
  
  export default CategoryProduct;
