 
import { Link } from "react-router-dom";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function ProjectDetailsArea() {
  return (
    <>
      {/* <!-- web service Section Start --> */}
      <section className="web-servies-section section-padding fix">
        <div className="container">
          <div className="blog-list-item">
            <div className="position-relative rounded-5 overflow-hidden">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                effect="fade"
                navigation={{
                  nextEl: ".array-next",
                  prevEl: ".array-prev",
                }}
                modules={[Navigation, EffectFade]}

               className="blog-thumb-wrapper swiper">
                
                  <SwiperSlide className="swiper-slide rounded-5 overflow-hidden">
                    <Link to="/service-details" className="thumb rounded-5 overflow-hidden w-100 d-block">
                      <img src="assets/img/service/service-slide2.png" alt="img" className="w-100" />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide rounded-5 overflow-hidden">
                    <Link to="/service-details" className="thumb rounded-5 overflow-hidden w-100 d-block">
                      <img src="assets/img/service/service-slide1.png" alt="img" className="w-100" />
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
          </div>
          <div className="contact-info-wrap contact-info-wrap02 mb-4 rounded-pill mt-4">
            <div className="contact-info_item">
              <p className="mb-2 lh-1">Client:</p>
              <h2 className="m-0 fs--18px">Addresss</h2>
            </div>
            <div className="border border-h-96 p-0 w-auto rounded-0"></div>
            <div className="contact-info_item">
              <p className="mb-2 lh-1">Project Team :</p>
              <h2 className="m-0 fs--18px">04 Members</h2>
            </div>
            <div className="border border-h-96 p-0 w-auto rounded-0"></div>
            <div className="contact-info_item">
              <p className="mb-2 lh-1">Services:</p>
              <h2 className="m-0 fs--18px">Branding, Logo, Messaging</h2>
            </div>
            <div className="border border-h-96 p-0 w-auto rounded-0"></div>
            <div className="contact-info_item">
              <p className="mb-2 lh-1">Date:</p>
              <h2 className="m-0 fs--18px">January 27, 2026</h2>
            </div>
            <div className="border border-h-96 p-0 w-auto rounded-0"></div>
            <div className="contact-info_item">
              <p className="mb-2 lh-1">Category :</p>
              <h2 className="m-0 fs--18px">Brand Identity & Positioning</h2>
            </div>
          </div>
          <div className="max-w-1370px mx-auto mb-4 pb-xl-2 pt-lg-2 wow fadeInUp" data-wow-delay="0.6s">
            <h2 className="fw-bold mb-lg-3 mb-2 heading-font text-uppercase text-dark">
              Project Overview
            </h2>
            <p className="mb-xl-3 mb-2">
              Our team partnered with Sarah Johnson to redefine their brand identity and establish a clear market
              position. The brand
              faced challenges with inconsistent visuals and messaging, which made it difficult to stand out in a
              competitive
              industry.
            </p>
            <p className="mb-4 pb-lg-2">
              We conducted in-depth research, analyzed the market and competitors, and developed a strategic
              positioning framework.
              Our creative team designed a cohesive visual identity, including logo, color palette, typography,
              and brand guidelines.
              We also crafted a compelling brand voice and messaging strategy. The result was a unified,
              professional brand that
              resonates with the target audience and strengthens market recognition.
            </p>
            <Link to="/" className="common_btn d-inline-flex text-nowrap">
              view website
              <span className="icon_wrapper">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
          <div className="max-w-1370px mx-auto mb-4 pb-lg-1 d-flex gap-xl-4 gap-3 align-items-center">
            <div className="thumb w-100 rounded-4 wow fadeInUp" data-wow-delay="0.4s">
              <img src="assets/img/service/service-details1.png" alt="img" className="w-100 rounded-4" />
            </div>
            <div className="thumb w-100 rounded-4 wow fadeInUp" data-wow-delay="0.4s">
              <img src="assets/img/service/service-details2.png" alt="img" className="w-100 rounded-4" />
            </div>
          </div>
          <div className="max-w-1370px mx-auto">
            <div className="row g-3 mb-lg-5 mb-4 wow fadeInUp" data-wow-delay="0.4s">
              <div className="col-md-4">
                <div className="fs-32px text-uppercase text-dark">
                  Overview
                </div>
              </div>
              <div className="col-md-8">
                <p className="mb-xxl-3 mb-xl-2 mb-1">
                  The brand lacked clear positioning, resulting in low recognition and limited differentiation
                  from competitors.
                  Additionally, their internal teams struggled to maintain brand consistency across digital
                  and offline channels.
                </p>
                <p>
                  Our challenge was to develop a cohesive brand identity, define a clear positioning strategy,
                  and create visual and
                  messaging guidelines that would unify the brand and build trust with customers across all
                  touchpoints.
                </p>
              </div>
            </div>
            <div className="row g-3 mb-lg-5 pb-xxl-2 mb-4 wow fadeInUp" data-wow-delay="0.7s">
              <div className="col-md-4">
                <div className="fs-32px text-uppercase text-dark">
                  Our Approach
                </div>
              </div>
              <div className="col-md-8">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa-solid fa-circle text-theme"></i>
                      <div>
                        <p className="fs-six fw-medium">
                          Brand research & market analysis
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa-solid fa-circle text-theme"></i>
                      <div>
                        <p className="fs-six fw-medium">
                          Brand positioning strategy
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa-solid fa-circle text-theme"></i>
                      <div>
                        <p className="fs-six fw-medium">
                          Logo & visual identity design
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa-solid fa-circle text-theme"></i>
                      <div>
                        <p className="fs-six fw-medium">
                          Brand voice & messaging framework
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-3 wow fadeInUp" data-wow-delay="0.6s">
              <div className="col-md-4">
                <div className="fs-32px text-uppercase text-dark">
                  Results
                </div>
              </div>
              <div className="col-md-8">
                <div className="d-flex service_count_grp flex-column gap-4">
                  <div className="about_count_item border-bottom pb-3 wow fadeInLeft" data-wow-delay="0.5s">
                    <div className="box d-flex gap-xxl-4 gap-xl-3 gap-2 flex-wrap align-items-end">
                      <div className="d-flex justify-content-center mb-0 cont-area">
                        <span className="count">120</span>
                        <span>%</span>
                      </div>
                      <p className="fw-normal m-0 text-dark opacity-75">
                        Months Project Duration
                      </p>
                    </div>
                  </div>
                  <div className="about_count_item secound border-bottom pb-3 wow fadeInLeft"
                    data-wow-delay="0.7s">
                    <div className="box d-flex gap-xxl-4 gap-xl-3 gap-2 flex-wrap align-items-end">
                      <div className="d-flex justify-content-center mb-0 cont-area">
                        <span className="count">45</span>
                        <span>%</span>
                      </div>
                      <p className="fw-normal m-0 text-dark opacity-75">
                        Average daily signups
                      </p>
                    </div>
                  </div>
                  <div className="about_count_item third border-bottom pb-3 wow fadeInLeft" data-wow-delay="0.9s">
                    <div className="box d-flex gap-xxl-4 gap-xl-3 gap-2 flex-wrap align-items-end">
                      <div className="d-flex justify-content-center mb-0 cont-area">
                        <span className="count">300</span>
                        <span>%</span>
                      </div>
                      <p className="fw-normal m-0 text-dark opacity-75">
                        Average daily signups
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="blog-previous_next justify-content-xl-center justify-content-start mt-xl-5 mt-4 pt-xl-3">
            <button type="button" className="cmn_prev">
              <i className="fa-solid fa-arrow-left"></i> Prev blog
            </button>
            <button type="button" className="cmn_prev active">
              Next blog <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
