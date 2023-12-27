import React from "react";
import HomeNavBar from '../components/HomeNav.component.jsx';
import HomeFooter from '../components/HomeFooter.component.jsx';

import SocialUpdateImage from "../asset/img/illustrations/Social update-bro.svg";
import InstacartLogo from '../asset/img/brands/instacart.png';
import KickstarterLogo from '../asset/img/brands/kickstarter.png';
import LyftLogo from '../asset/img/brands/lyft.png';
import ShopifyLogo from '../asset/img/brands/shopify.png';
import PinterestLogo from '../asset/img/brands/pinterest.png';
import TwitterLogo from '../asset/img/brands/twitter.png';
import FollowingIllustration from '../asset/img/illustrations/Following-rafiki.svg';
import FollowingAmico from '../asset/img/illustrations/Following-amico.svg';
import MobileFeed from '../asset/img/illustrations/Mobile feed-bro.svg';
import WebDevelopment from '../asset/img/illustrations/web-development.svg'

function Home() {
  return (
    <>
      <HomeNavBar />
      
      <header className="pt-5">
        <div className="container pt-4 pt-xl-5">
          <div className="row pt-5">
            <div className="col-md-8 text-center text-md-start mx-auto">
              <div className="text-center">
                <h1 className="display-4 fw-bold mb-5">
                  Welcome to Hive - The Next Generation of&nbsp;
                  <span className="underline">Social Networking</span>.
                </h1>
                <p className="fs-5 text-muted mb-5">
                  Join the Hive community and discover the future of social
                  media!
                </p>
                <form
                  className="d-flex justify-content-center flex-wrap"
                  method="post"
                  data-bs-theme="light"
                >
                  <div className="shadow-lg mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="shadow-lg mb-3">
                    <button className="btn btn-primary" type="submit">
                      Subscribe{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-10 mx-auto">
              <div className="text-center position-relative">
                <img
                    className="img-fluid"
                    src={SocialUpdateImage}
                    alt="Social Update Illustration"
                    style={{ width: "800px" }}
                    />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="text-center mt-5">
        <p className="mb-4" style={{ fontSize: "1.6rem" }}>
          Used by{" "}
          <span className="bg-primary p-1" style={{ Color: "white" }}>
            <strong>2400+</strong>
          </span>
          &nbsp;of the best companies in the world.
        </p>
        <a href="https://example.com">
        <img className="m-3" src={InstacartLogo} alt="Instacart Logo" />
      </a>
      <a href="https://example.com">
        <img className="m-3" src={KickstarterLogo} alt="Kickstarter Logo" />
      </a>
      <a href="https://example.com">
        <img className="m-3" src={LyftLogo} alt="Lyft Logo" />
      </a>
      <a href="https://example.com">
        <img className="m-3" src={ShopifyLogo} alt="Shopify Logo" />
      </a>
      <a href="https://example.com">
        <img className="m-3" src={PinterestLogo} alt="Pinterest Logo" />
      </a>
      <a href="https://example.com">
        <img className="m-3" src={TwitterLogo} alt="Twitter Logo" />
      </a>
      </div>

      <section>
        <div className="container py-4 py-xl-5">
          <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div className="col">
              <div className="card border-light border-1 d-flex justify-content-center p-4">
                <div className="card-body">
                  <div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icon-tabler-connect"
                    >
                      <path d="M4 17v-5h9.6a3.5 3.5 0 0 0 0 7H4zm12 0h4a2 2 0 0 0 2 -2v-4"></path>
                      <line x1="16" y1="12" x2="20" y2="12"></line>
                      <line x1="17" y1="16" x2="17" y2="16.01"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="fw-bold">Elevate Your Social Game</h4>
                    <p className="text-muted">
                      Discover how Hive takes your social experience to the next
                      level with a diverse range of features, connecting you
                      like never before.
                    </p>
                    <button className="btn btn-sm px-0" type="button">
                      Learn More&nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-arrow-right"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        ></path>
                      </svg>
                      <br />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-light border-1 d-flex justify-content-center p-4">
                <div className="card-body">
                  <div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icon-tabler-world"
                    >
                      <path d="M12 4c-1.43 0-2.84 .18-4.19 .53a2 2 0 0 0-1.09 .61l-1.86 2.92a1 1 0 0 0 0 1.06l2.89 4.6c.2 .31 .49 .56 .82 .68c.34 .12 .71 .1 1.03-.05l2.87-1.16a1 1 0 0 0 .66-.67l1.14-2.89a1 1 0 0 0-.06-1.04a1 1 0 0 0 .69-.92c.01-.39-.19-.75-.5-.97c-.3-.23-.68-.3-1.04-.21l-1.92 .5a2 2 0 0 0-1.13 .74c-.19 .26-.46 .46-.77 .56a6 6 0 0 0-1.05 .32l-1.68 .43l.56-1.4l1.68-.43c.11-.03 .22-.08 .33-.11c.26-.08 .49-.2 .7-.38c.21-.18 .38-.41 .49-.67l1.19-3c.14 .01 .28 .04 .42 .04c.58 0 1.11-.16 1.55-.44a1 1 0 0 0 .68-.68a3.91 3.91 0 0 0 1.19-2.79c.03-.36-.08-.72-.3-1.03a1 1 0 0 0-.71-.46c-4.39 .91-7.85 4.37-8.76 8.76c-.12 .52 .03 1.05 .38 1.51a1 1 0 0 0 1.01 .33c1.29-.53 2.75-.83 4.37-.83c.21 0 .42 .01 .63 .02a1 1 0 0 0 .99-1.09a10.11 10.11 0 0 0-.47-2.82a1 1 0 0 0-.55-.55a10.08 10.08 0 0 0-2.82-.48a1 1 0 0 0-1.08 .99c-.01 .21-.02 .42-.02 .63c0 1.62 .3 3.08 .83 4.37c.06 .22 .26 .38 .49 .45c4.39 .91 7.85 4.36 8.76 8.75c.06 .26 .25 .46 .51 .54c.18 .04 .37 .04 .55 .01c1.47-.38 2.57-1.42 2.96-2.88a1 1 0 0 0-.32-1.02a7.91 7.91 0 0 0 .53-3.58c-.03-.58-.17-1.15-.41-1.69a1 1 0 0 0-.88-.57z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="fw-bold">Your Social Universe Unleashed!</h4>
                    <p className="text-muted">
                      Hive is where your digital universe comes to life. Share,
                      chat, and connect with friends in ways you've never
                      imagined.
                    </p>
                    <button className="btn btn-sm px-0" type="button">
                      Learn More&nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-arrow-right"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        ></path>
                      </svg>
                      <br />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-light border-1 d-flex justify-content-center p-4">
                <div className="card-body">
                  <div className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2em"
                      height="2em"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icon-tabler-rocket"
                    >
                      <path d="M5.636 4.636l-3.584 3.584a1 1 0 0 0 0 1.414l6.363 6.364a1 1 0 0 1 .065 1.665l-1.48 1.48a8 8 0 0 0 11.314 -11.314l-1.48 1.48a1 1 0 0 1 1.665 .065l6.364 6.363a1 1 0 0 0 1.414 0l3.583 -3.584"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="fw-bold"> Where Social Dreams Soar!</h4>
                    <p className="text-muted">
                      {" "}
                      Join Hive and watch your social dreams take flight!
                      Unleash your creativity and make lasting connections with
                      this dynamic platform.
                    </p>
                    <button className="btn btn-sm px-0" type="button">
                      Learn More&nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-arrow-right"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        ></path>
                      </svg>
                      <br />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4 py-xl-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className="display-6 fw-bold pb-md-4">
                Your Social Universe&nbsp;
                <span className="underline">Unleashed!</span>
              </h3>
            </div>
            <div className="col-md-6 pt-4">
              <p className="text-muted mb-4">
                Hive is where your digital universe comes to life. Share, chat,
                and connect with friends in ways you've never imagined.
              </p>
            </div>
          </div>
          <div className="row gy-4 gy-md-0">
            <div className="col-md-6 d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
              <div>
                <div className="row gy-2 row-cols-1 row-cols-sm-2">
                  <div className="col text-center text-md-start">
                    <div className="d-flex justify-content-center align-items-center justify-content-md-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"

                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-secondary"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                      </svg>
                      <h5 className="fw-bold mb-0 ms-2">Your Digital Identity</h5>
                    </div>
                    <p className="text-muted my-3">
                      Create and customize your user profile to showcase your
                      personality, interests, and connections on Hive.
                    </p>
                  </div>
                  <div className="col text-center text-md-start">
                    <div className="d-flex justify-content-center align-items-center justify-content-md-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"

                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-secondary"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                      </svg>
                      <h5 className="fw-bold mb-0 ms-2">Express Yourself</h5>
                    </div>
                    <p className="text-muted my-3">
                      Share your thoughts, photos, videos, and experiences with
                      your friends and followers effortlessly.
                    </p>
                  </div>
                  <div className="col text-center text-md-start">
                    <div className="d-flex justify-content-center align-items-center justify-content-md-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"

                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-secondary"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                      </svg>
                      <h5 className="fw-bold mb-0 ms-2">Engage & Connect</h5>
                    </div>
                    <p className="text-muted my-3">
                      Engage in meaningful discussions and connect with others
                      through interactive comments on posts.
                    </p>
                  </div>
                  <div className="col text-center text-md-start">
                    <div className="d-flex justify-content-center align-items-center justify-content-md-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"

                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icon-tabler-sun fs-3 text-primary bg-secondary"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                      </svg>
                      <h5 className="fw-bold mb-0 ms-2">Show Appreciation</h5>
                    </div>
                    <p className="text-muted my-3">
                      {" "}
                      Show your appreciation by liking and reacting to posts,
                      letting your friends know you care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-first order-md-last">
              <div>
                <img
                    className="rounded img-fluid w-100 fit-cover"
                    style={{ minHeight: '300px' }}
                    src={FollowingIllustration}
                    alt="Following"
                    />
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4 py-xl-5">
          <div className="row gy-4 gy-md-0">
            <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
              <div>
                <img
                  className="rounded img-fluid fit-cover"
                  style={{minHeight: '300px'}}
                  src={FollowingAmico}
                  width="800"
                  alt="following"
                />
              </div>
            </div>
            <div className="col">
              <div style={{ maxWidth : '450px' }}>
                <h3 className="fw-bold pb-md-4">
                  Features that make your team more&nbsp;
                  <span className="underline">productive</span>
                </h3>
                <p className="text-muted py-4 py-md-0">
                  Venenatis leo imperdiet magna enim eu quisque, metus gravida
                  pulvinar morbi.
                </p>
                <div className="row gy-4 row-cols-2 row-cols-md-2">
                  <div className="col">
                    <div>
                      <span className="fs-2 fw-bold text-primary bg-secondary">
                        40+
                      </span>
                      <p className="fw-normal text-muted">Amazing plugins</p>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <span className="fs-2 fw-bold text-primary bg-secondary">
                        100+
                      </span>
                      <p className="fw-normal text-muted">Ready-to use templates</p>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <span className="fs-2 fw-bold text-primary bg-secondary">
                        123+
                      </span>
                      <p className="fw-normal text-muted">Years of experience</p>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <span className="fs-2 fw-bold text-primary bg-secondary">
                        123+
                      </span>
                      <p className="fw-normal text-muted">Years of experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4 py-xl-5">
          <div className="row gy-4 gy-md-0">
            <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
              <div style={{ maxWidth: '350px'}}>
                <h1 className="display-6 fw-bold mb-4">
                  Everything your team needs in one&nbsp;
                  <span className="underline">platform</span>.
                </h1>
                <p className="my-4 test-p">
                  Elevate Your Social Media Experience with Hive - Where
                  Everything Connects!
                </p>
                <a
                  className="btn btn-primary btn-lg me-2"
                  role="button"
                  href="https://localhost:7049/Identity/Account/Login"
                >
                  Login
                </a>
                <a
                  className="btn btn-light btn-lg"
                  role="button"
                  href="https://localhost:7049/Identity/Account/Register"
                >
                  Signup
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img
                  className="rounded img-fluid w-100 fit-cover"
                  style={{ minHeight : '350px'}}
                  src={MobileFeed}
                  alt="feed"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 mt-5">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2 className="fw-bold">
                What people say
                <br />
                <span className="underline pb-2">about us</span>
              </h2>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 d-sm-flex justify-content-sm-center">
            <div className="col mb-4">
              <div className="d-flex align-items-center align-items-sm-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-quote fs-1 text-warning flex-shrink-0"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                </svg>
                <div>
                  <p className="fs-6 mb-3 ms-2 test-p">
                    Hive has redefined the way I connect with my friends and
                    family. The seamless user experience, from posting photos to
                    video calling, is simply unmatched. It's become an integral
                    part of my daily life.
                  </p>
                  <div className="d-flex ms-2">
                    <div className="d-flex">
                      <p className="fw-bold me-2">John Smith</p>
                      <p className="text-muted mb-0">johnSmith</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-4">
              <div className="d-flex align-items-center align-items-sm-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-quote fs-1 text-warning flex-shrink-0"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                </svg>
                <div>
                  <p className="fs-6 mb-3 ms-2 test-p">
                    I've been on Hive for a while now, and the sense of
                    community here is fantastic. It's more than just a platform;
                    it's a place where I've made genuine connections and had
                    meaningful conversations.
                  </p>
                  <div className="d-flex ms-2">
                    <div className="d-flex">
                      <p className="fw-bold me-2">Zayn Malik</p>
                      <p className="text-muted mb-0">zayn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="d-flex align-items-center align-items-sm-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-quote fs-1 text-warning flex-shrink-0"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                </svg>
                <div>
                  <p className="fs-6 mb-3 ms-2 test-p">
                    Hive's messaging feature has made staying in touch with my
                    friends a breeze. The ability to send messages and media in
                    a secure environment is something I value greatly.
                  </p>
                  <div className="d-flex ms-2">
                    <div className="d-flex">
                      <p className="fw-bold me-2">Bob Marley</p>
                      <p className="text-muted mb-0">theLegendMarley</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 py-xl-5">
        <div className="container">
          <div className="bg-primary border rounded border-0 border-primary overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <div className="text-white p-4 p-md-5">
                  <h2 className="fw-bold mb-3">
                    Ut semper sed, aptent taciti conubia.
                  </h2>
                  <p className="mb-4 test-p">
                    Tincidunt laoreet leo, adipiscing taciti tempor. Primis
                    senectus sapien, risus donec ad fusce augue interdum.
                  </p>
                  <div className="my-3">
                    <a
                      className="btn btn-secondary me-2 mt-2"
                      role="button"
                      href="https://localhost:7049/Identity/Account/Login"
                    >
                      Login
                    </a>
                    <a
                      className="btn btn-light mt-2"
                      role="button"
                      href="https://localhost:7049/Identity/Account/Register"
                    >
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 order-first order-md-last"
                style={{ minHeight : '250px'}}
              >
                <img
                  className="w-100 h-100 fit-contain pt-5 pt-md-0"
                  src={WebDevelopment}
                  alt="web"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 py-xl-5 mb-5">
        <div className="container">
          <div className="row mb-2">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2 className="display-6 fw-bold mb-5">
                <span className="pb-3 underline">
                  FAQ
                  <br />
                </span>
              </h2>
              <p className="text-muted mb-5">
                Explore our comprehensive Hive FAQs to find answers to all your
                questions about our platform and enhance your social media
                experience!
              </p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-8 mx-auto">
              <div className="accordion text-muted" role="tablist" id="accordion-1">
                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-1 .item-1"
                      aria-expanded="true"
                      aria-controls="accordion-1 .item-1"
                    >
                      What sets Hive apart from other social media platforms?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse show item-1"
                    role="tabpanel"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body">
                      <p className="test-p">
                        Hive offers a comprehensive suite of features, including
                        user profiles, messaging, video calls, and more, all in
                        one place. It's designed for seamless and meaningful
                        social interaction, making it a unique and user-centric
                        social experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-1 .item-2"
                      aria-expanded="false"
                      aria-controls="accordion-1 .item-2"
                    >
                      Is Hive a safe and secure platform for communication?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse item-2"
                    role="tabpanel"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body">
                      <p className="mb-0 test-p">
                        Hive prioritizes the security and privacy of its users.
                        We use robust encryption and privacy settings to ensure
                        your data is protected. You have control over who sees
                        your content and messages.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-1 .item-3"
                      aria-expanded="false"
                      aria-controls="accordion-1 .item-3"
                    >
                      How do I get started with Hive?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse item-3"
                    role="tabpanel"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body">
                      <p className="mb-0 test-p">
                        Getting started with Hive is easy! Simply download the
                        app or visit our website, create your account, set up
                        your profile, and you're ready to connect, share, and
                        engage with friends and the Hive community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 py-xl-5">
        <div className="container">
          <div className="text-white bg-primary border rounded border-0 border-primary d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
            <div className="pb-2 pb-lg-1">
              <h2 className="fw-bold text-secondary mb-2">
                Not sure how Hive works?
              </h2>
              <p className="mb-0">
                Discover the ins and outs of Hive's features and make the most
                of your social experience.
              </p>
            </div>
            <div className="my-2">
              <a className="btn btn-light fs-5 py-2 px-4" role="button" href="https://example.com">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      <HomeFooter />
    </>
  );
}

export default Home;
