 
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "../modals/VideoPopup";


export default function BlogStandardArea() {
  return (
    <>
      {/* <!-- blog Section Start --> */}
      <section className="blog-event-section section-padding fix">
        <div className="container container1370">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="blog-standard-details pe-xxl-5">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="blog-list-item position-relative border rounded-5 wow fadeInUp"
                      data-wow-delay="0.4s">
                      <div className="date-box m-xxl-4 m-lg-3 m-2">
                        <span className="month">Jun</span>
                        <span className="date">16</span>
                      </div>
                      <Link to="/blog-details" className="thumb w-100 d-block">
                        <img src="assets/img/blog/blog-standard1.png" alt="img" className="w-100" />
                      </Link>
                      <div className="conts">
                        <div className="d-flex mb-2 align-items-center gap-md-4 gap-3">
                          <p className="fs-six fw-medium">Learn & Grow</p>
                          <p className="pra-clr">-</p>
                          <p className="fs-six fw-medium">0 Comments</p>
                        </div>
                        <h2 className="mb-3">
                          <Link to="/blog-details">
                            Digital Marketing Trends to Watch This Year
                          </Link>
                        </h2>
                        <p className="fw-medium mb-4">
                          Quisque volutpat non nisl idele tincidunt praesent at eros vitae the
                          pulvinar ornare. Nuncion eleifen the interdum
                          velit, ac accumsan dui fermentum et. In the imperdiet ...
                        </p>
                        <div className="pt-xl-2">
                          <Link to="/blog-details"
                            className="common_btn common_btn-blacktheme d-inline-flex text-nowrap">
                            VIEW DETAILS
                            <span className="icon_wrapper">
                              <i className="fas fa-long-arrow-alt-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="blog-list-item position-relative border rounded-5 wow fadeInUp"
                      data-wow-delay="0.5s">
                      <div className="date-box m-xxl-4 m-lg-3 m-2 z-2">
                        <span className="month">Jun</span>
                        <span className="date">16</span>
                      </div>
                      <div className="position-relative">
                        <Swiper 
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        navigation={{
                          nextEl: ".array-next",
                          prevEl: ".array-prev",
                        }}
                        modules={[Navigation]}
                        className="blog-thumb-wrapper swiper">
                        
                            <SwiperSlide className="swiper-slide">
                              <Link to="/blog-details" className="thumb w-100 d-block">
                                <img src="assets/img/blog/blog-standard2.png" alt="img"
                                  className="w-100" />
                              </Link>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                              <Link to="/blog-details" className="thumb w-100 d-block">
                                <img src="assets/img/blog/blog-standard2.png" alt="img"
                                  className="w-100" />
                              </Link>
                            </SwiperSlide>
                   
                        </Swiper>
                        <button className="array-prev" type="button">
                          <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button className="array-next" type="button">
                          <i className="fa-solid fa-arrow-right"></i>
                        </button>
                      </div>
                      <div className="conts">
                        <div className="d-flex mb-2 align-items-center gap-md-4 gap-3">
                          <p className="fs-six fw-medium">Digital Growth</p>
                          <p className="pra-clr">-</p>
                          <p className="fs-six fw-medium">0 Comments</p>
                        </div>
                        <h2 className="mb-3">
                          <Link to="/blog-details">
                            Social Media Campaigns That Convert
                          </Link>
                        </h2>
                        <p className="fw-medium mb-4">
                          Quisque volutpat non nisl idele tincidunt praesent at eros vitae the
                          pulvinar ornare. Nuncion eleifen the interdum
                          velit, ac accumsan dui fermentum et. In the imperdiet ...
                        </p>
                        <div className="pt-xl-2">
                          <Link to="/blog-details"
                            className="common_btn common_btn-blacktheme d-inline-flex text-nowrap">
                            VIEW DETAILS
                            <span className="icon_wrapper">
                              <i className="fas fa-long-arrow-alt-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="blog-list-item position-relative border rounded-5 wow fadeInUp"
                      data-wow-delay="0.6s">
                      <div className="date-box m-xxl-4 m-lg-3 m-2">
                        <span className="month">Jun</span>
                        <span className="date">16</span>
                      </div>
                        <VideoPopup>
                      <div className="thumb position-relative w-100 d-center">
                        <img src="assets/img/blog/blog-standard3.png" alt="img" className="w-100" />
                        <a style={{cursor: "pointer"}}
                          className="video-blog video-popup position-absolute">
                          <i className="fas fa-play"></i>
                        </a>
                      </div>
                        </VideoPopup>
                      <div className="conts">
                        <div className="d-flex mb-2 align-items-center gap-md-4 gap-3">
                          <p className="fs-six fw-medium">Growth Strategies</p>
                          <p className="pra-clr">-</p>
                          <p className="fs-six fw-medium">0 Comments</p>
                        </div>
                        <h2 className="mb-3">
                          <Link to="/blog-details">
                            Content Marketing Tips for Brand Growth
                          </Link>
                        </h2>
                        <p className="fw-medium mb-4">
                          Quisque volutpat non nisl idele tincidunt praesent at eros vitae the
                          pulvinar ornare. Nuncion eleifen the interdum
                          velit, ac accumsan dui fermentum et. In the imperdiet ...
                        </p>
                        <div className="pt-xl-2">
                          <Link to="/blog-details"
                            className="common_btn common_btn-blacktheme d-inline-flex text-nowrap">
                            VIEW DETAILS
                            <span className="icon_wrapper">
                              <i className="fas fa-long-arrow-alt-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="blog-list-item position-relative border rounded-5 wow fadeInUp"
                      data-wow-delay="0.7s">
                      <div className="date-box m-xxl-4 m-lg-3 m-2">
                        <span className="month">Jun</span>
                        <span className="date">16</span>
                      </div>
                      <Link to="/blog-details" className="thumb w-100 d-block">
                        <img src="assets/img/blog/blog-standard4.png" alt="img" className="w-100" />
                      </Link>
                      <div className="conts">
                        <div className="d-flex mb-2 align-items-center gap-md-4 gap-3">
                          <p className="fs-six fw-medium">Brand & Marketing</p>
                          <p className="pra-clr">-</p>
                          <p className="fs-six fw-medium">0 Comments</p>
                        </div>
                        <h2 className="mb-3">
                          <Link to="/blog-details">
                            Creative Campaign Ideas That Get Noticed
                          </Link>
                        </h2>
                        <p className="fw-medium mb-4">
                          Quisque volutpat non nisl idele tincidunt praesent at eros vitae the
                          pulvinar ornare. Nuncion eleifen the interdum
                          velit, ac accumsan dui fermentum et. In the imperdiet ...
                        </p>
                        <div className="pt-xl-2">
                          <Link to="/blog-details"
                            className="common_btn common_btn-blacktheme d-inline-flex text-nowrap">
                            VIEW DETAILS
                            <span className="icon_wrapper">
                              <i className="fas fa-long-arrow-alt-right"></i>
                            </span>
                          </Link>
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
