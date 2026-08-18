import { Link } from "react-router-dom";

export default function FooterTwo() {
  return (
    <>

      {/* <!--<< Footer Section Start >>--> */}
      <footer className="footer-section footer-section-2 fix">
        <div className="container py-lg-0 py-5 my-lg-0 my-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4 col-md-6 border-end border-clr-this">
              <div className="py-lg-5 me-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                <div className="my-xl-5 py-lg-4">
                  <div className="sarah-mitchel">
                    <div className="head mb-3 d-inline-flex align-items-center gap-xxl-3 gap-2">
                      <div className="thumb">
                        <img src="assets/img/footer/sarah.png" alt="img" className="rounded-2" />
                      </div>
                      <div className="cont">
                        <div
                          className="fs-32px mb-2 text-white text-uppercase heading-font lh-1 fw-bold mb-1">
                          Sarah Mitchell
                        </div>
                        <p className="fs-seven text-white opacity-75">
                          Founder, Launchify
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="fs-seven text-uppercase opacity-75 mb-3 fw-semibold text-white">
                        Social Icon:
                      </div>
                      <div className="social-white gap-xl-3 gap-2 d-flex align-items-center">
                        <a href="#" className="icon">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" className="icon">
                          <i className="fa-brands fa-dribbble"></i>
                        </a>
                        <a href="#" className="icon">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" className="icon">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                    <div className="badge">
                      contact ME
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="ps-lg-4">
                <div className="row g-4">
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="">
                      <div className="heading-font mb-lg-4 mb-3 fs-32px fw-bold text-white">
                        About
                      </div>
                      <p className="fs-seven text-white opacity-75 pb-xxl-5 pb-4">
                        Alex is a full-service developer crafting high-performance web solutions. Since
                        2019, I’ve helped global brands.
                      </p>
                      <p className="py-2 px-4 bg-white rounded-pill pra-clr text-center fs-seven">
                        &copy; 2026 <a href="#0" className="text-theme fw-semibold">Arigo.</a> All rights
                        reserved.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="heading-font mb-lg-4 mb-3 fs-32px fw-bold text-white">
                      Quick Links
                    </div>
                    <ul className="d-flex flex-wrap gap-3 wow fadeInUp" data-wow-delay="0.4s">
                      <li>
                        <Link to="/about" className="fs-seven text-white opacity-75">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="fs-seven text-white opacity-75">
                          News & Articles
                        </Link>
                      </li>
                      <li>
                        <Link to="/service" className="fs-seven text-white opacity-75">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact" className="fs-seven text-white opacity-75">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="fs-seven text-white opacity-75">
                          Recent Work
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-5 col-md-7 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="heading-font mb-4 pb-lg-2 fs-32px fw-bold text-white">
                      SSubscribe to My <br /> Developer Newsletter
                    </div>
                    <form action="#0"
                      className="form-style002 d-flex flex-xl-nowrap flex-wrap align-items-center gap-0">
                      <input type="text" placeholder="Enter your Email" />
                      <button type="button">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="marquee gap-10px">
          <div className="marquee-group text-box-wrapper gap-10px">
            <div className="marquee-icon p-0 text-nowrap">
              845, King Street Road,New York - 89654.
            </div>
            <div className="marquee-icon p-0">
              <img src="assets/img/footer/slide-line.png" alt="img" />
            </div>
            <div className="marquee-icon p-0 text-nowrap">
              +1 (000) 437-5688
            </div>
            <div className="marquee-icon p-0">
              <img src="assets/img/footer/slide-line.png" alt="img" />
            </div>
            <div className="marquee-icon p-0 text-nowrap">
              hello@arigo@gmail.com
            </div>
            <div className="marquee-icon p-0">
              <img src="assets/img/footer/slide-line.png" alt="img" />
            </div>
            <div className="marquee-icon p-0 text-nowrap">
              457, New York - 89654.
            </div>
          </div>
          <div className="marquee-group text-box-wrapper gap-10px">
            <div className="marquee-icon p-0 text-nowrap">
              845, King Street Road,New York - 89654.
            </div>
            <div className="marquee-icon p-0">
              <img src="assets/img/footer/slide-line.png" alt="img" />
            </div>
            <div className="marquee-icon p-0 text-nowrap">
              +1 (000) 437-5688
            </div>
            <div className="marquee-icon p-0">
              <img src="assets/img/footer/slide-line.png" alt="img" />
            </div>
            <div className="marquee-icon p-0 text-nowrap">
              hello@arigo@gmail.com
            </div>
            <div className="marquee-icon p-0">
              <img src="assets/img/footer/slide-line.png" alt="img" />
            </div>
            <div className="marquee-icon p-0 text-nowrap">
              457, New York - 89654.
            </div>
          </div>
          <div className="marquee-group text-box-wrapper gap-10px">
            <div className="marquee-icon p-0 text-nowrap">
              845, King Street Road,New York - 89654.
            </div>
            <div className="marquee-icon p-0">
              <img src="assets/img/footer/slide-line.png" alt="img" />
            </div>
            <div className="marquee-icon p-0 text-nowrap">
              +1 (000) 437-5688
            </div>
            <div className="marquee-icon p-0">
              <img src="assets/img/footer/slide-line.png" alt="img" />
            </div>
            <div className="marquee-icon p-0 text-nowrap">
              hello@arigo@gmail.com
            </div>
            <div className="marquee-icon p-0">
              <img src="assets/img/footer/slide-line.png" alt="img" />
            </div>
            <div className="marquee-icon p-0 text-nowrap">
              457, New York - 89654.
            </div>
          </div>
          <div className="marquee-group text-box-wrapper gap-10px">
            <div className="marquee-icon p-0 text-nowrap">
              845, King Street Road,New York - 89654.
            </div>
            <div className="marquee-icon p-0">
              <img src="assets/img/footer/slide-line.png" alt="img" />
            </div>
            <div className="marquee-icon p-0 text-nowrap">
              +1 (000) 437-5688
            </div>
            <div className="marquee-icon p-0">
              <img src="assets/img/footer/slide-line.png" alt="img" />
            </div>
            <div className="marquee-icon p-0 text-nowrap">
              hello@arigo@gmail.com
            </div>
            <div className="marquee-icon p-0">
              <img src="assets/img/footer/slide-line.png" alt="img" />
            </div>
            <div className="marquee-icon p-0 text-nowrap">
              457, New York - 89654.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
