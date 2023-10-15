import React from "react";
import { ArrowDown, Globe, WhiteSearch } from "../svgs";

export default function Help() {
  return (
    <React.Fragment>
      <HelpHeader />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: 960,
          margin: "auto",
          gap: "16px",
        }}
      >
        <HelpCard />
        <HelpCard />
        <HelpCard />
        <HelpCard />
        <HelpCard />
      </div>
      <Footer />
    </React.Fragment>
  );
}

const HelpHeader = () => {
  return (
    <header
      id="header"
      data-testid="header"
      className="relative flex-none text-header-color mb-9 bg-header-bg bg-header-image bg-cover bg-center pb-9"
    >
      <div
        dir="ltr"
        className="header__container flex grow basis-auto justify-center px-5 marker:shrink-0 sm:px-10 o__ltr"
      >
        <section className="relative w-240">
          <div className="header__meta_wrapper mt-6 flex items-center leading-none mb-12">
            <div className="mo__body header__site_name">
              <div className="header__logo">
                <a href="/en/" className="jsx-73269029ea53bf4f">
                  <img
                    src="https://downloads.intercomcdn.com/i/o/334980/0a3b640df4317b5ea57b44bc/c863f316e77438c7b08fab2d96f28021.png"
                    height="144"
                    alt="CelebriLinks Help Center"
                  />
                </a>
              </div>
            </div>
            <div class="jsx-73269029ea53bf4f">
              <div class="jsx-73269029ea53bf4f flex items-center font-semibold">
                <nav
                  class="hidden items-center md:flex"
                  data-testid="large-screen-children"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://linktr.ee/"
                    class="mx-5 mb-5 text-md no-underline hover:opacity-80 md:mx-3 md:my-0 md:text-base"
                    data-testid="header-link-default"
                  >
                    <span>Go to CelebriLinks</span>
                  </a>
                  <div class="relative cursor-pointer">
                    <select class="peer absolute z-10 block h-6 w-full cursor-pointer opacity-0 md:text-base">
                      <option value="/en/" class="text-black" selected="">
                        English
                      </option>
                      <option value="/id/" class="text-black">
                        Bahasa Indonesia
                      </option>
                      <option value="/pt/" class="text-black">
                        Português
                      </option>
                      ;
                    </select>
                    <div class="mb-10 ml-5 flex items-center gap-1 text-md hover:opacity-80 peer-hover:opacity-80 md:m-0 md:ml-3 md:text-base">
                      <Globe />
                      English
                      <ArrowDown />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* ... */}
          <h1 className="jsx-73269029ea53bf4f text-7 mb-6 text-welcome-message font-bold text-header-color">
            How can we help you?
          </h1>
          <div>
            <Form />
          </div>
        </section>
      </div>
    </header>
  );
};

const Form = () => {
  return (
    <form action="/en/" autocomplete="off" class="">
      <div class="relative flex">
        <input
          type="text"
          autocomplete="off"
          className="inin peer w-full rounded-2xl border border-black-alpha-8 p-4 pl-12 font-sans text-lg text-header-color shadow-search-bar outline-none transition ease-linear placeholder:text-header-color hover:bg-white-alpha-27 hover:shadow-search-bar-hover focus:border-transparent focus:bg-white focus:text-black-10 focus:shadow-search-bar-focused placeholder:focus:text-black-45 o__ltr"
          placeholder="Search for articles..."
          name="q"
        />
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center fill-header-color pl-4 peer-focus-visible:fill-black-45">
          <WhiteSearch />
        </div>
      </div>
    </form>
  );
};

const HelpCard = () => {
  return (
    <div
      className="flex grow flex-row flex-col gap-4 p-5 sm:flex-col sm:p-6 shadow-card"
      id="getting-started-with-CelebriLinks"
    >
      <div
        id="collection-icon-3020860"
        className="flex items-center rounded-card-inner bg-cover h-10 w-10 justify-center bg-collection-card-bg bg-collection-card-image"
        data-test-collection-photo="true"
      >
        <div className="h-6 w-6">
          <img
            src="https://downloads.intercomcdn.com/i/o/388114/77500fc8e727d0f6bea1e831/5037a941f8fa8aeb42140451d0d68d9f.png"
            alt=""
            width="100%"
            height="100%"
            loading="lazy"
          />
        </div>
      </div>
      <div
        className="intercom-force-break flex w-full flex-1 flex-col text-body-primary-color justify-between"
        dir="ltr"
      >
        <div>
          <h3
            className="-mt-1 mb-0.5 line-clamp-2 text-md font-semibold leading-normal text-body-primary-color transition ease-linear group-hover/collection-summary:text-primary sm:line-clamp-1"
            data-testid="collection-name"
          >
            Getting Started With CelebriLinks
          </h3>
          <p className="mb-0 mt-0 line-clamp-3 text-md sm:line-clamp-2">
            Help you get started with CelebriLinks
          </p>
        </div>
        <div className="mt-4">
          <div className="flex">
            <span
              className="line-clamp-1 flex text-base text-body-secondary-color"
              style={{ color: "hsl(211, 10%, 61%)" }}
            >
              24 articles
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="help-footer bg-footer-bg text-footer-color">
      <div className="shrink-0 grow basis-auto px-5 sm:px-10">
        <div className="content">
          <div dir="ltr">
            <div className="footer__logo text-footer-color">
              <a href="/en/">
                <img
                  data-testid="logo-img"
                  src="https://downloads.intercomcdn.com/i/o/334980/0a3b640df4317b5ea57b44bc/c863f316e77438c7b08fab2d96f28021.png"
                  alt="CelebriLinks Help Center"
                  className="inline"
                />
              </a>
            </div>
            <div className="mb-10 mt-4">
              <ul
                data-testid="social-links"
                className="p-0 text-center"
                id="social-links"
              >
                <li className="mx-2 inline-block list-none footer__link__facebook">
                  <a
                    target="_blank"
                    href="https://facebook.com/CelebriLinks"
                    rel="nofollow noreferrer noopener"
                    data-testid="footer-social-link-0"
                  >
                    <i style={{fontSize: 20}} className="fa fa-facebook" />
                  </a>
                </li>
                <li className="mx-2 inline-block list-none footer__link__twitter">
                  <a
                    target="_blank"
                    href="https://twitter.com/CelebriLinks_"
                    rel="nofollow noreferrer noopener"
                    data-testid="footer-social-link-1"
                  >
                    <i style={{fontSize: 22}} className="fa fa-twitter" />
                  </a>
                </li>
                <li className="mx-2 inline-block list-none footer__link__linkedin">
                  <a
                    target="_blank"
                    href="https://linkedin.com/company/CelebriLinks"
                    rel="nofollow noreferrer noopener"
                    data-testid="footer-social-link-2"
                  >
                    <i style={{fontSize: 24}} className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
