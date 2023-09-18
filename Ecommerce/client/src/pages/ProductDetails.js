import Layout from '../components/Layout/Layout';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import toast from 'react-hot-toast';
const ProductDetails = () => {

  const navigate= useNavigate();
  const params= useParams()
  const [product, setProduct]= useState({})
  const [cart,setCart]= useCart()
  const [relatedProducts, setRelatedProducts]= useState([])
  //initial Product details(lifecycle method)
  useEffect(()=>{
    if(params?.slug) getProduct()
  },[params.slug])

  // get product
const getProduct = async () =>{
  try {
    const {data} =await axios.get(`/api/v1/product/get-product/${params.slug}`)
    setProduct(data?.product);
    getSimilarProduct(data?.product._id, data?.product.category._id)
  } catch (error) {
    console.log(error)
  }
}

//get similar product
const getSimilarProduct = async(pid,cid) =>{
  try {
    const {data} = await axios.get(`/api/v1/product/related-product/${pid}/${cid}`)
    setRelatedProducts(data?.products) //when hook is an array we have to use ' s ' like products instead of product.
  } catch (error) {
    console.log(error)
  }
}

return (
  <Layout >
    <div className="smol-container">
  <div className="smol-image col-md-6">
    <img
      src={`/api/v1/product/product-photo/${product._id}`}
      className="smol-img"
      alt={product.name}
    />
  </div>

  <div className="smol-details col-md-6 text-center">
    <h1>Details</h1>
    <h6>Name: {product.name}</h6>
    <h6>Description: {product.description}</h6>
    <h6>Price: {product.price}</h6>
    {/* <h6>Category: {product.category.name}</h6> */}
    {product.category && (
                <h6>Category: {product.category.name}</h6>
              )}
              <button class="btn btn-primary ms-1" 
                    onClick={() =>{setCart([...cart,product])
                    localStorage.setItem('cart', JSON.stringify([...cart,product]))
                    toast.success('item added to cart')
                    }}>
                    Add To Cart</button>
    
  </div>
</div>
 <hr />
   <div className='row'>
   <h1> Similar </h1>
   {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        {relatedProducts.length > 1 && (
          <p className="text-center">{relatedProducts.length} Products found</p>
        )}

   <div className='d-flex flex-wrap'>
        {relatedProducts?.map((p) => (
              
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                    <p className="card-text">₹ {p.price}</p>
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
              
            ))}
        </div>
   </div>
  </Layout>
)
}
export default ProductDetails