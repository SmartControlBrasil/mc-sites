import { Link } from "react-router-dom";

interface BreacrumbProps {
  title?: string;
  subtitle?: string;
  homeLabel?: string;
}

export default function Breacrumb({ title, subtitle, homeLabel = "Home" }: BreacrumbProps) {
  return (
    <>
      {/* <!-- Banner Section Start --> */}
      <section className="banner-breadcrumb-section fix position-relative">
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="text-center sub-font2 visible-slowly-bottom">
              {title}
            </h1>
            <div className="text-center">
              <ul className="bread-link">
                <li>
                  <Link to="/">
                    {homeLabel}
                  </Link>
                </li>
                <li>
                  //
                </li>
                <li>
                  {subtitle}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img src="assets/img/element/circle-opacity.png" alt="img" className="breadcrumb-cirlce cir36" />
      </section>
      {/* <!-- Banner Section Start --> */}
    </>
  )
}
