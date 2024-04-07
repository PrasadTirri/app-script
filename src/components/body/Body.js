import React, { useEffect, useState } from "react";
import "./Body.css";
import axios from "axios";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [Modal, setViewModal] = useState(false);

  const getProducts = async () => {
    const response = await axios("https://fakestoreapi.com/products");
    const data = await response.data;
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleMenu = () => {
    const list = document.querySelector(".customize-list");
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  };

  const viewModal = () => {
    setViewModal(!Modal);
  };
  return (
    <div className="body">
      <div className="container">
        <div className="home-shop">
          <p>
            <span style={{ color: "#e5e5e5" }}>HOME | </span> SHOP
          </p>
        </div>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p className="p1">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus{" "}
          <br />
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>

        <div className="filter-mobile">
          <p>FILTER</p> |<p>RECOMMENDED ⌄</p>
        </div>

        <div className="hidebar">
          <p style={{ fontWeight: "bold", width: "10%" }}>3425 ITEMS</p>
          <div className="recomended-container">
            {" "}
            <p className="hide-text" onClick={handleMenu}>
              &lt; HIDE FILTER
            </p>
            <div>
              <p style={{ position: "relative" }} onClick={viewModal}>
                RECOMMENDED ⌄{" "}
              </p>
              {Modal && (
                <ul
                  style={{
                    listStyle: "none",
                    position: "absolute",
                    boxShadow: "2px 2px 6px 2px #00000014",
                    padding: "10px",
                    textAlign: "right",
                    backgroundColor: "white",
                  }}
                >
                  <li style={{ fontWeight: "bold", margin: "3px" }}>
                    ✔ RECOMMENDED
                  </li>
                  <li style={{ margin: "3px" }}>NEWEST FIRST</li>
                  <li style={{ margin: "3px" }}>POPULAR</li>
                  <li style={{ margin: "3px" }}>PRICE: HIGH TO LOW</li>
                  <li style={{ margin: "3px" }}>PRICE: LOW TO HIGH</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="products-container">
          <div className="customize">
            <div className="customize-list">
              <li className="customize-list-item1">
                <input type="checkbox" name="" id="" />
                <p className="customize-item">CUSTOMIZBLE</p>
              </li>
              <li className="customize-list-item">
                <div>
                  <p className="customize-item">IDEAL FOR</p>
                  <span>⌄</span>
                </div>
                <p>All</p>
              </li>
              <li className="customize-list-item">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <p className="customize-item">OCCASION</p>
                  <span>⌄</span>
                </div>
                <p>All</p>
              </li>
              <li className="customize-list-item">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <p className="customize-item">WORK</p>
                  <span>⌄</span>
                </div>
                <p>All</p>
              </li>
              <li className="customize-list-item">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <p className="customize-item">FABRIC</p>
                  <span>⌄</span>
                </div>
                <p>All</p>
              </li>
              <li className="customize-list-item">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <p className="customize-item">SEGMENT</p>
                  <span>⌄</span>
                </div>
                <p>All</p>
              </li>
              <li className="customize-list-item">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <p className="customize-item">SUITABLE FOR</p>
                  <span>⌄</span>
                </div>
                <p>All</p>
              </li>
              <li className="customize-list-item">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <p className="customize-item">RAW MATERIALS</p>
                  <span>⌄</span>
                </div>
                <p>All</p>
              </li>
              <li className="customize-list-item">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <p className="customize-item">PATERN</p>
                  <span>⌄</span>
                </div>
                <p>All</p>
              </li>
            </div>
          </div>
          <div className="products">
            {products?.map((item, index) => (
              <div className="mobile-container" key={item.id}>
                <img
                  className="product-image"
                  src={item.image}
                  alt={item.title}
                />
                <h3>
                  {item.title.length > 10
                    ? item.title.slice(0, 20).toUpperCase() + "..."
                    : item.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "-20px",
                  }}
                >
                  <p className="description">
                    <span>Sign in </span> or Create an account to see Pricing
                  </p>
                  <p>&#x2661;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
