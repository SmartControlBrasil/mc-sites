import { Link } from "react-router-dom";


export default function BlogDetailsArea() {
  return (
    <>
      {/* <!-- blog Section Start --> */}
      <section className="blog-event-section section-padding fix">
        <div className="container container1370">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="blog-big-head-thumb rounded-4 w-100 position-relative">
                <img src="assets/img/blog/blog-details-big1.png" alt="img" className="w-100 rounded-4" />
                <div className="social-gray gap-xl-3 gap-2 d-flex align-items-center">
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
                  <a href="#" className="icon">
                    <i className="fa-brands fa-vimeo-v"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="blog-standard-details">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="blog-standard-item wow fadeInUp" data-wow-delay="0.4s">
                      <p className="mb-xl-3 mb-2 fw-medium">
                        Digital marketing continues to evolve as technology and consumer behavior change
                        rapidly. This year, brands are focusing
                        more on AI-driven automation, personalized customer experiences, and data-led
                        decision-making. Short-form video content
                        remains a powerful tool for engagement,
                      </p>
                      <p className="fw-medium md-xl-3 mb-2">
                        while voice search and conversational marketing are reshaping SEO strategies.
                        Social commerce is growing fast, allowing
                        users to shop directly through social platforms.
                      </p>
                      <p className="fw-medium">
                        At the same time, authentic branding and purpose-driven marketing are becoming
                        essential for building trust and
                        long-term relationships. Businesses that adapt to these trends will gain
                        stronger visibility, higher engagement, and
                        sustainable growth in an increasingly competitive digital landscape.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="pb-xxl-2 wow fadeInUp" data-wow-delay="0.5s">
                      <div className="fs-two text-uppercase heading-font mb-2 fw-bold">
                        Introduction
                      </div>
                      <p className="fw-medium">
                        Digital marketing is evolving faster than ever as technology, platforms, and
                        consumer behavior continue to shift.
                        Businesses can no longer rely on traditional strategies alone; they must adapt
                        to a digital-first mindset to stay
                        competitive. Advances in artificial intelligence, automation, and data analytics
                        are transforming
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="thumb w-100 rounded-4">
                      <img src="assets/img/blog/blog-details-big2.png" alt="img" className="w-100 rounded-4" />
                    </div>
                  </div>
                  <div className="col-12">
                    <p className="fw-medium">
                      how brands plan, execute, and measure their marketing efforts. At the same time,
                      consumers expect more personalized,
                      relevant, and authentic experiences across every digital touchpoint. Social media,
                      search engines, and content platforms
                      are constantly changing, creating both challenges and new opportunities for growth.
                    </p>
                  </div>
                  <div className="col-12">
                    <div className="quote__icon-box">
                      <img src="assets/img/element/quote-top.png" alt="img" className="quote" />
                      <p className="fw-medium">
                        This blog delivers clear, up-to-date insights on digital marketing trends. The
                        content is easy to understand,
                        well-structured, and highly actionable for businesses of all sizes.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <p className="fw-medium">
                      Understanding these changes is essential for building effective marketing strategies
                      that deliver measurable results. By
                      staying informed about emerging digital marketing trends, businesses can make
                      smarter decisions, connect more deeply
                      with their audiences, and create campaigns that drive engagement, trust, and
                      long-term success in an increasingly
                      competitive digital landscape.
                    </p>
                  </div>

                  <div className="col-12">
                    <div
                      className="d-flex border-top border-bottom py-4 align-items-center gap-3 flex-wrap justify-content-between">
                      <ul className="share-tag d-flex align-items-center gap-3 flex-wrap">
                        <li className="fs-20px fw-bold">
                          Tags:
                        </li>
                        <li>
                          <a href="#">
                            Email Marketing
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            SEO Tips
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Brand Identity
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="quote-box_wrap mt-3 wow fadeInUp" data-wow-delay="0.6s">
                      <div
                        className="user-thumb-area-grop flex-sm-nowrap flex-wrap gap-3 d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
                        <div className="user-img">
                          <img src="assets/img/blog/alister-user.png" alt="img" />
                        </div>
                        <div
                          className="author-info justify-content-start align-items-start text-start flex-column">
                          <div className="name mb-3 d-block fs-24px fw-bold heading-font">Alister Jhone
                          </div>
                          <p className="text-capitalize fw-medium body-font">
                            All the Lorem Ipsum generators on the Internet tend in repetition
                            predefined chunks as necessary, making this the
                            combined with handful of model sentence structures,
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 pt-lg-3">
                    <div className="fs-32px fw-bold mb-4 pb-2">
                      2 Comments
                    </div>
                    <div className="replay-area-item align-items-start mb-4 pb-xl-2">
                      <div className="thumbs">
                        <img src="assets/img/blog/reply-user1.png" alt="img" />
                      </div>
                      <div className="content">
                        <div
                          className="d-flex mb-md-2 mb-1 align-items-start justify-content-between flex-wrap gap-2">
                          <div
                            className="author-info justify-content-start align-items-start text-start flex-column">
                            <div className="name lh-1 text-dark mt-1 mb-1 fs-20px">Frank Flores</div>
                            <span className="designation fw-medium pra-clr">July 20, 2023 at 7:22
                              pm</span>
                          </div>
                          <button type="button"
                            className="p-0 btn fw-semibold text-dark border-0 outline-none">
                            Reply
                          </button>
                        </div>
                        <p className="fw-medium pra-clr">
                          Best theme I've ever worked with — it's basically 50+ Themes in one, super
                          easy to customize,
                          beautiful starting layouts/templates for a variety of website needs.
                        </p>
                      </div>
                    </div>
                    <div className="replay-area-item align-items-start middle mb-4">
                      <div className="thumbs">
                        <img src="assets/img/blog/reply-user2.png" alt="img" />
                      </div>
                      <div className="content">
                        <div
                          className="d-flex mb-md-2 mb-1 align-items-start justify-content-between flex-wrap gap-2">
                          <div
                            className="author-info justify-content-start align-items-start text-start flex-column">
                            <div className="name lh-1 text-dark mt-1 mb-1 fs-20px">ARIGO</div>
                            <span className="designation fw-medium pra-clr">July 21, 2023 at 7:22
                              pm</span>
                          </div>
                          <button type="button"
                            className="p-0 btn fw-semibold text-dark border-0 outline-none">
                            Reply
                          </button>
                        </div>
                        <p className="fw-medium pra-clr">
                          The only thing I LOVE more than this theme and it's incredible options is
                          the support
                          team! Th are freakin AMAZEBALLS!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 pt-4">
                    <div className="fs-32px fw-bold mb-4">
                      Leave a Reply
                    </div>
                    <div className="contact-submit-area p-0 bg-transparent leave-comments wow fadeInUp"
                      data-wow-delay=".5s">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="cont-grp-info">
                            <input id="name" type="text" placeholder="Enter your name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="cont-grp-info">
                            <input id="email" type="text" placeholder="Enter your email" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="cont-grp-info">
                            <textarea id="Message" rows={4}
                              placeholder="Type your message"></textarea>
                          </div>
                          <div className="form-check mt-1">
                            <input className="form-check-input" type="checkbox" value=""
                              id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                              I agree that my submitted data is being collected and stored. *
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12 pt-2">
                          <a href="#"
                            className="common_btn common_btn-iconblack d-inline-flex text-nowrap">
                            SEND MESSAGE
                            <span className="icon_wrapper">
                              <i className="fas fa-long-arrow-alt-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="blog-previous_next justify-content-xl-center justify-content-start mt-xl-5 mt-4 pt-xl-3">
                  <button type="button" className="cmn_prev">
                    <i className="fa-solid fa-arrow-left"></i> Prev blog
                  </button>
                  <button type="button" className="cmn_prev active">
                    Next blog <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-right-area">
                <div className="search-in wow fadeInUp" data-wow-delay="0.4s">
                  <div className="fs-three mb-3 lh-1 heading-font fw-bold">
                    Search
                  </div>
                  <form action="#">
                    <input type="text" placeholder="Search Blog" />
                    <button type="button">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="search-in wow fadeInUp" data-wow-delay="0.5s">
                  <div className="fs-three mb-3 lh-1 heading-font fw-bold">
                    Categories
                  </div>
                  <ul className="blog-category">
                    <li>
                      <a href="#">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-arrow-right fs-seven"></i>
                          Early Education
                        </span>
                        <span>
                          (08)
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-arrow-right fs-seven"></i>
                          Creative Learning
                        </span>
                        <span>
                          (02)
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-arrow-right fs-seven"></i>
                          Child Development
                        </span>
                        <span>
                          (05)
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-arrow-right fs-seven"></i>
                          Parenting Tips
                        </span>
                        <span>
                          (08)
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-arrow-right fs-seven"></i>
                          School Life
                        </span>
                        <span>
                          (02)
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-arrow-right fs-seven"></i>
                          Health & Wellness
                        </span>
                        <span>
                          (04)
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="search-in wow fadeInUp" data-wow-delay="0.6s">
                  <div className="fs-three mb-3 lh-1 heading-font fw-bold">
                    Recent Post
                  </div>
                  <div className="d-flex flex-column gap-4">
                    <div className="recent-right-item">
                      <Link to="/blog-details" className="thumb w-100 d-block">
                        <img src="assets/img/blog/recent-blog1.png" alt="img" className="w-100" />
                      </Link>
                      <div className="cont">
                        <div className="d-flex mb-1 fs-seven text-theme fw-medium align-items-center gap-2">
                          <i className="fa-solid fa-circle dot"></i>
                          Feb 12, 2026
                        </div>
                        <Link to="/blog-details" className="fs--18px">
                          Social Media Campaigns That Convert and Scale
                        </Link>
                      </div>
                    </div>
                    <div className="border-bottom"></div>
                    <div className="recent-right-item">
                      <Link to="/blog-details" className="thumb w-100 d-block">
                        <img src="assets/img/blog/recent-blog2.png" alt="img" className="w-100" />
                      </Link>
                      <div className="cont">
                        <div className="d-flex mb-1 fs-seven text-theme fw-medium align-items-center gap-2">
                          <i className="fa-solid fa-circle dot"></i>
                          Feb 12, 2026
                        </div>
                        <Link to="/blog-details" className="fs--18px">
                          Content Marketing Strategies for Modern Brands
                        </Link>
                      </div>
                    </div>
                    <div className="border-bottom"></div>
                    <div className="recent-right-item">
                      <Link to="/blog-details" className="thumb w-100 d-block">
                        <img src="assets/img/blog/recent-blog3.png" alt="img" className="w-100" />
                      </Link>
                      <div className="cont">
                        <div className="d-flex mb-1 fs-seven text-theme fw-medium align-items-center gap-2">
                          <i className="fa-solid fa-circle dot"></i>
                          Feb 12, 2026
                        </div>
                        <Link to="/blog-details" className="fs--18px">
                          SEO Strategies That Deliver Long-Term Results
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="search-in wow fadeInUp" data-wow-delay="0.7s">
                  <div className="fs-three mb-3 lh-1 heading-font fw-bold">
                    Tags
                  </div>
                  <ul className="blog-tags">
                    <li>
                      <a href="#">
                        Email Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        SEO Tips
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Brand Identity
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Email Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        UX & Conversion
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Paid Ads
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
