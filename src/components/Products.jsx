import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import a1 from '../images/a1.png';
import a2 from '../images/a2.png';
import a3 from '../images/a3.png';
import a4 from '../images/a4.png';
import a5 from '../images/a5.png';

const Proddata = [
  {
    title: "FLUTTER",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: a1,
    category: "flutter",
    price: "100",
    id: 1
  },
  {
    title: "MERN",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: a2,
    category: "mern",
    price: "210",
    id: 2
  },
  {
    title: "FIGMA",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: a3,
    category: "figma",
    price: "200",
    id: 3
  },
  {
    title: "UI/UX",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: a4,
    category: "ui/ux",
    price: "100",
    id: 4
  },
  {
    title: "MERN",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: a5,
    category: "mern",
    price: "700",
    id: 5
  },
  {
    title: "FLUTTER",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: a2,
    category: "flutter",
    price: "500",
    id: 6
  },
  {
    title: "UI/UX",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: a3,
    category: "ui/ux",
    price: "300",
    id: 7
  },
  {
    title: "FIGMA",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: a4,
    category: "figma",
    price: "400",
    id: 8
  },
  {
    title: "FIGMA",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: a5,
    category: "figma",
    price: "450",
    id: 9
  },
  {
    title: "MERN",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: a3,
    category: "mern",
    price: "750",
    id: 10
  },
  {
    title: "UI/UX",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: a1,
    category: "ui/ux",
    price: "100",
    id: 11
  },
  {
    title: "FLUTTER",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: a2,
    category: "flutter",
    price: "00",
    id: 12
  },
]

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(Proddata);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    // console.log(Proddata);

    const updatedList = Proddata.filter((item) => item.category === cat);
    setFilter(updatedList);
  }
  console.log(filter);

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(Proddata)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("mern")}>MERN Projects</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("figma")}>
            Figma Projects
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("flutter")}>Flutter projects</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("ui/ux")}>UI/UX Projects</button>
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div
                className="card text-center h-100 shadow-lg border-0"
                style={{
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out',
                  backgroundColor: '#f5f5f5',
                }}
              >
                {/* Image Section */}
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt={product.title}
                  style={{
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '15px 15px 0 0',
                  }}
                />
                {/* Card Body */}
                <div className="card-body">
                  <h5 className="card-title font-weight-bold text-truncate" style={{ minHeight: '48px' }}>
                    {product.title}
                  </h5>
                  <p className="card-text text-muted">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                {/* Price Section */}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead font-weight-bold" style={{ backgroundColor: '#e9ecef' }}>
                    $ {product.price}
                  </li>
                </ul>
                {/* Action Buttons */}
                <div className="card-body d-flex justify-content-center">
                  <Link to={"/product/" + product.id} className="btn btn-primary m-1" style={{ minWidth: '120px' }}>
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-outline-primary m-1"
                    onClick={() => {
                      alert(`${product.title} has been added to the cart!`);
                      addProduct(product);
                    }}
                    style={{ minWidth: '120px' }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};
export default Products;
