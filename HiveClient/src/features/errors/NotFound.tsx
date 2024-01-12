import React from "react";
import NotFounded from '../../asset/img/hive/notfound.png';
import HiveNav from '../../components/HiveNavBar/HiveNav.component.tsx';
import HomeFooter from '../../components/HomeFooter.component.jsx';

function NotFound() {
  return (
    <>
    <HiveNav/>

      <section className="py-5 mt-5">
        <div className="container">
          <div className="row row-cols-1 d-flex justify-content-center align-items-center">
            <div className="col-md-10 text-center">
              <img
                className="img-fluid w-100"
                src={NotFounded}
                alt="not found"
              />
            </div>
            <div className="col text-center">
              <h2 className="display-3 fw-bold mb-4">Page Not Found</h2>
              <p className="fs-4 text-muted">
                Fusce adipiscing sit, torquent porta pulvinar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomeFooter />
    </>
  );
}

export default NotFound;
