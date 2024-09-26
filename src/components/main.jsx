import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
            <h1 className="card-title fs-1 text text-2xl font-bold">New Website Unveiled!</h1>
              <p className="card-text fs-5 d-none d-sm-block ">
              Discover the Arrival of Our Newly Developed Website
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;