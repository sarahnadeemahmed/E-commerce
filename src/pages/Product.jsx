import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";
import a1 from '../images/a1.png';
import a2 from '../images/a2.png';
import a3 from '../images/a3.png';
import a4 from '../images/a4.png';
import a5 from '../images/a5.png';


const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    };
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
            price: "600",
            id: 12
        },
    ]

    useEffect(() => {
        const getProductById = () => {
            setLoading(true);
            const foundProduct = Proddata.find((item) => item.id === parseInt(id));
            setProduct(foundProduct);
            setLoading(false);

            // Find similar products based on the category of the current product
            if (foundProduct) {
                const similarItems = Proddata.filter(
                    (item) => item.category === foundProduct.category && item.id !== foundProduct.id
                );
                setSimilarProducts(similarItems);
                setLoading2(false);
            }
        };
        getProductById();
    }, [id]);




    const Loading = () => {
        return (
            <>
                <div className="container my-5 py-2">
                    <div className="row">
                        <div className="col-md-6 py-3">
                            <Skeleton height={400} width={400} />
                        </div>
                        <div className="col-md-6 py-5">
                            <Skeleton height={30} width={250} />
                            <Skeleton height={90} />
                            <Skeleton height={40} width={70} />
                            <Skeleton height={50} width={110} />
                            <Skeleton height={120} />
                            <Skeleton height={40} width={110} inline={true} />
                            <Skeleton className="mx-3" height={40} width={110} />
                        </div>
                    </div>
                </div>
            </>
        );
    };
    const ShowProduct = () => {
        return (
            <>
                <div className="container my-5 py-2">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 py-3">
                            <img
                                className="img-fluid"
                                src={product.image}
                                alt={product.title}
                                width="400px"
                                height="400px"
                            />
                        </div>
                        <div className="col-md-6 col-md-6 py-5">
                            <h4 className="text-uppercase text-muted">{product.category}</h4>
                            <h1 className="display-5">{product.title}</h1>
                            <p className="lead">
                                {product.rating && product.rating.rate}{" "}
                                <i className="fa fa-star"></i>
                            </p>
                            <h3 className="display-6  my-4">${product.price}</h3>
                            <p className="lead">{product.description}</p>
                            <button
                                className="btn btn-outline-dark"
                                onClick={() => addProduct(product)}
                            >
                                Add to Cart
                            </button>
                            <Link to="/cart" className="btn btn-dark mx-3">
                                Go to Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    };
    const Loading2 = () => {
        return (
            <>
                <div className="my-4 py-4">
                    <div className="d-flex">
                        <div className="mx-4">
                            <Skeleton height={400} width={250} />
                        </div>
                        <div className="mx-4">
                            <Skeleton height={400} width={250} />
                        </div>
                        <div className="mx-4">
                            <Skeleton height={400} width={250} />
                        </div>
                        <div className="mx-4">
                            <Skeleton height={400} width={250} />
                        </div>
                    </div>
                </div>
            </>
        );
    };
    const ShowSimilarProduct = () => {
        return (
            <>
                <div className="py-4 my-4">
                    <div className="d-flex">
                        {similarProducts.map((item) => {
                            return (
                                <div key={item.id} className="card mx-4 text-center">
                                    <img
                                        className="card-img-top p-3"
                                        src={item.image}
                                        alt="Card"
                                        height={300}
                                        width={300}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {item.title.substring(0, 15)}...
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <Link
                                            to={"/product/" + item.id}
                                            className="btn btn-dark m-1"
                                        >
                                            Buy Now
                                        </Link>
                                        <button
                                            className="btn btn-outline-dark"
                                            onClick={() => {
                                                addProduct(product);
                                                alert('Product added to cart!');
                                            }}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    };
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
                <div className="row my-5 py-5">
                    <div className="d-none d-md-block">
                        <h2 className="">You may also Like</h2>
                        <Marquee
                            pauseOnHover={true}
                            pauseOnClick={true}
                            speed={50}
                        >
                            {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
                        </Marquee>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Product;