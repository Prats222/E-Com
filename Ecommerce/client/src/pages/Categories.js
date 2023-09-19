import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  const categoryButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80px", // Default height for larger screens
    width: "100%", // Default width for larger screens
    fontSize: "18px", // Default font size for larger screens
    marginBottom: "-15px",
  };

  // Media query for smaller screens
  const smallScreenStyle = {
    height: "50px",
    fontSize: "10px", // Adjust the font size for smaller screens
  };

  const linkStyle = {
    color: "white", // Set font color to white
    textDecoration: "none", // Remove underline
  };

  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row container">
          {categories.map((c) => (
            <div className="col-md-4 mt-3 mb-3 gx-3 gy-3" key={c._id}>
              <div
                className="card2"
                style={{
                  ...categoryButtonStyle,
                  ...(window.innerWidth < 768 && smallScreenStyle), // Apply small screen styles
                }}
              >
                <Link to={`/category/${c.slug}`} style={linkStyle} className="btn cat-btn">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
