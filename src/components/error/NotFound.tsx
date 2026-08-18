
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderThree from "@/layouts/headers/HeaderThree"
import { Link } from "react-router-dom"



export default function NotFound() {
  return (
    <>
      <HeaderThree style_2={true} />
      {/* <!-- error Section Start --> */}
      <section className="error-section fix">
        <div className="container">
          <div className="error-thumb wow fadeInUp" data-wow-delay="0.4s">
            <img src="assets/img/element/error.png" alt="img" />
          </div>
          <div className="error-content">
            <h2 className="mb-sm-3 black-clr mb-2 wow fadeInUp wow fadeInUp" data-wow-delay="0.5s">
              Oops! This Page Went <br /> Off Strategy
            </h2>
            <p className="mb-48 wow fadeInUp" data-wow-delay="0.6s">
              Looks like the page you’re looking for doesn’t exist or has been moved. But <br /> don’t worry—our
              team is still here. Let’s
              get you back on track.
            </p>
            <Link to="/" className="common_btn text-nowrap wow fadeInUp" data-wow-delay="0.7s">
              Go Back Home
              <span className="icon_wrapper">
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <FooterOne />
    </>
  )
}
