import React from 'react';
import i3 from '../images/h2.png';
import i1 from '../images/i1.png';
import i2 from '../images/i2.gif';
import i4 from '../images/i4.png';
// import c1 from '../images/c1.png';

const HomePage = () => {
  return (
    <>
      <section className="w-full bg-white dark:bg-wickeddark p-100px">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="pb-12 text-center">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                  We wanted to turn <br className="hidden lg:block" /> our visitors into users
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="container py-5">
        <div className="row g-4">

          <div className="col-lg-6">
            <div className="d-flex">
              <img
                className="img-fluid rounded me-3"
                src={i1}
                alt="B2B Branding"
                style={{ width: '100px', height: '100px' }}
              />
              <div>
                <span className="text-muted small">August 20.20.21</span>
                <h5 className="mt-2">
                  <a href="./blog-post.html" className="text-dark text-decoration-none">
                    B2B Branding: 5 tips to go from boring to extraordinary
                  </a>
                </h5>
                <p className="text-muted">
                  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex">
              <img
                className="img-fluid rounded me-3"
                src={i2}
                alt="Building a Career in Character Design"
                style={{ width: '100px', height: '100px' }}
              />
              <div>
                <span className="text-muted small">Feel Free to serve</span>
                <h5 className="mt-2">
                  <a href="./blog-post.html" className="text-dark text-decoration-none">
                    Building a Career in Character Design: A chat with Sarah Beth Morgan
                  </a>
                </h5>
                <p className="text-muted">
                  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                </p>
              </div>
            </div>
          </div>


          <div className="col-lg-6">
            <div className="d-flex">
              <img
                className="img-fluid rounded me-3"
                src={i3}
                alt="Graphic Design Skills"
                style={{ width: '100px', height: '100px' }}
              />
              <div>
                <span className="text-muted small">August 20.20.21</span>
                <h5 className="mt-2">
                  <a href="./blog-post.html" className="text-dark text-decoration-none">
                    12 Graphic Design Skills You Need To Get Hired (& How to Develop Them)
                  </a>
                </h5>
                <p className="text-muted">
                  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="d-flex">
              <img
                className="img-fluid rounded me-3"
                src={i4}
                alt="Podcast for Designers"
                style={{ width: '100px', height: '100px' }}
              />
              <div>
                <span className="text-muted small">August 20.20.21</span>
                <h5 className="mt-2">
                  <a href="./blog-post.html" className="text-dark text-decoration-none">
                    Meet Now What? The essential new podcast for evolving designers
                  </a>
                </h5>
                <p className="text-muted">
                  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
                </p>
              </div>
            </div>
          </div>

        </div>
        <br />

        <div class="container relative py-24">
          <div class="mx-auto flex max-w-7xl flex-wrap items-center">
            <div class="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
              <div>
                <div class="relative w-full max-w-lg">
                  <div class="relative">
                    <img class="mx-auto rounded-lg object-cover object-center" alt="hero"
                      src= {i4} />
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-16 mt-12 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:grow lg:pl-6 xl:mt-0 xl:pl-24">
              <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-gray-600 md:text-7xl lg:text-5xl">
                Medium length display headline.
              </h1>
              <p class="mb-8 text-left text-base leading-relaxed text-gray-500">
              software system developed for specialized information filtering and text processing. It typically focuses on 
              enabling users to sift through large volumes of data to extract relevant information based on predefined criteria. 
              SIFTware utilizes algorithms that filter,
               sort, and prioritize data, allowing for more efficient handling of vast datasets or content streams.
              </p>
              <div class="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
                <div class="prose-md prose">
                  <ul>
                    <li class="text-gray-500">Incredible reason to purchase.</li>
                    <li class="text-gray-500">Expensive feature.</li>
                    <li class="text-gray-500">Really good feauture.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default HomePage;
