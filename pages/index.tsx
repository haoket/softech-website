import * as Icon from 'react-feather';
import Link from 'next/link';
import PageBanner from '@/components/Banner/PageBanner';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Pagination } from 'swiper';
import { getPostsByCategories } from '@/services/getPosts';
import CATEGORIES from '@/constants/CATEGORIES';

// ===================================Banner===========================================//
const MainBanner = () => {
  return (
    <>
      <div className='bigdata-analytics-banner'>
        <div className='container'>
          <div className='bigdata-analytics-content'>
            <h1>Leading Big Data Analytics Company</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

            <Link href='/contact' className='btn btn-primary'>
              Get Started
            </Link>
          </div>
        </div>

        <div className='banner-boxes-area'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-4 col-sm-6'>
                <div className='single-banner-boxes'>
                  <div className='icon'>
                    <Icon.Server />
                  </div>
                  <h3>Analyze Your Data</h3>
                  <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                </div>
              </div>

              <div className='col-lg-4 col-sm-6'>
                <div className='single-banner-boxes'>
                  <div className='icon'>
                    <Icon.Code />
                  </div>
                  <h3>Customized Plan</h3>
                  <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                </div>
              </div>

              <div className='col-lg-4 col-sm-6'>
                <div className='single-banner-boxes'>
                  <div className='icon'>
                    <Icon.Users />
                  </div>
                  <h3>Implement Solution</h3>
                  <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// ===================================WhatWeDo=========================================//
const WhatWeDo = () => {
  return (
    <>
      <div className='what-we-do-area ptb-80'>
        <div className='container'>
          <div className='section-title'>
            <h2>What We Do</h2>
            <div className='bar'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-what-we-do-box'>
                <div className='icon'>
                  <i className='flaticon-monitor'></i>
                </div>
                <h3>
                  <Link href='/service-details'>Research</Link>
                </h3>
                <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                <Link href='/service-details' className='link'>
                  Market Research
                </Link>

                <Link href='/service-details' className='link'>
                  Investment Research
                </Link>

                <Link href='/service-details' className='read-more-btn'>
                  <Icon.ArrowRight /> Read More
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-what-we-do-box'>
                <div className='icon'>
                  <i className='flaticon-idea'></i>
                </div>

                <h3>
                  <Link href='/service-details'>Analytics</Link>
                </h3>

                <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                <Link href='/service-details' className='link'>
                  Data Analytics
                </Link>

                <Link href='/service-details' className='link'>
                  Business Intelligence
                </Link>

                <Link href='/service-details' className='read-more-btn'>
                  <Icon.ArrowRight /> Read More
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-what-we-do-box'>
                <div className='icon'>
                  <i className='flaticon-software'></i>
                </div>
                <h3>
                  <Link href='/service-details'>Technology</Link>
                </h3>
                <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                <Link href='/service-details' className='link'>
                  Intelligence Automation
                </Link>

                <Link href='/service-details' className='link'>
                  Quality Engineering
                </Link>

                <Link href='/service-details' className='read-more-btn'>
                  <Icon.ArrowRight /> Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// ===================================DiscoverArea======================================//
const DiscoverArea = () => {
  return (
    <>
      <div className='discover-area ptb-80'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='discover-image'>
                <img src='/images/bigdata-analytics/discover-img1.png' alt='image' />
                <img src='/images/bigdata-analytics/discover-img2.jpg' alt='image' />
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='discover-content'>
                <h2>Engaging New Audiences through Smart Approach</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to
                  use a passage.
                </p>

                <Link href='#' className='btn btn-primary'>
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='analytics-shape1'>
          <img src='/images/bigdata-analytics/analytics-shape1.png' alt='image' />
        </div>
      </div>
    </>
  );
};
// ===================================Services=========================================//
const Services = () => {
  return (
    <>
      <div className='bigdata-services-area ptb-80 bg-eef6fd'>
        <div className='container'>
          <div className='section-title'>
            <h2>Services We Can Help You With</h2>
            <div className='bar'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='single-services-box-item'>
                <div className='icon'>
                  <img src='/images/bigdata-analytics/icon1.png' alt='image' />
                </div>
                <h3>
                  <Link href='/service-details'>Big Data Analysis</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>

                <Link href='/service-details' className='learn-more-btn'>
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className='shape'>
                  <img src='/images/bigdata-analytics/rectangle.png' alt='image' />
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='single-services-box-item'>
                <div className='icon'>
                  <img src='/images/bigdata-analytics/icon2.png' alt='image' />
                </div>
                <h3>
                  <Link href='/service-details'>Robust Analytics</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>

                <Link href='/service-details' className='learn-more-btn'>
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className='shape'>
                  <img src='/images/bigdata-analytics/rectangle.png' alt='image' />
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='single-services-box-item'>
                <div className='icon'>
                  <img src='/images/bigdata-analytics/icon3.png' alt='image' />
                </div>
                <h3>
                  <Link href='/service-details'>Marketing Analytics</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>

                <Link href='/service-details' className='learn-more-btn'>
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className='shape'>
                  <img src='/images/bigdata-analytics/rectangle.png' alt='image' />
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='single-services-box-item'>
                <div className='icon'>
                  <img src='/images/bigdata-analytics/icon4.png' alt='image' />
                </div>
                <h3>
                  <Link href='/service-details'>Data Visualization</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>

                <Link href='/service-details' className='learn-more-btn'>
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className='shape'>
                  <img src='/images/bigdata-analytics/rectangle.png' alt='image' />
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='single-services-box-item'>
                <div className='icon'>
                  <img src='/images/bigdata-analytics/icon5.png' alt='image' />
                </div>
                <h3>
                  <Link href='/service-details'>Securities Research</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>

                <Link href='/service-details' className='learn-more-btn'>
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className='shape'>
                  <img src='/images/bigdata-analytics/rectangle.png' alt='image' />
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='single-services-box-item'>
                <div className='icon'>
                  <img src='/images/bigdata-analytics/icon6.png' alt='image' />
                </div>
                <h3>
                  <Link href='/service-details'>Data Governance</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>

                <Link href='/service-details' className='learn-more-btn'>
                  <Icon.ArrowRight /> Learn More
                </Link>

                <div className='shape'>
                  <img src='/images/bigdata-analytics/rectangle.png' alt='image' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// ===================================TeamStyleTwo====================================//
const TeamStyleTwo = () => {
  return (
    <>
      <div className='team-area repair-team-area pt-80 pb-50 bg-f9f6f6'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Awesome Team</h2>
            <div className='bar'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className='row justify-content-center'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-team'>
                <div className='team-image'>
                  <img src='/images/team-image/team1.jpg' alt='image' />
                </div>

                <div className='team-content'>
                  <div className='team-info'>
                    <h3>Josh Buttler</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    <li>
                      <a href='https://www.facebook.com/' target='_blank'>
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.twitter.com/' target='_blank'>
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/' target='_blank'>
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.gitlab.com/' target='_blank'>
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='single-team'>
                <div className='team-image'>
                  <img src='/images/team-image/team2.jpg' alt='image' />
                </div>

                <div className='team-content'>
                  <div className='team-info'>
                    <h3>Alex Maxwel</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    <li>
                      <a href='https://www.facebook.com/' target='_blank'>
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.twitter.com/' target='_blank'>
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/' target='_blank'>
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.gitlab.com/' target='_blank'>
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='single-team'>
                <div className='team-image'>
                  <img src='/images/team-image/team3.jpg' alt='image' />
                </div>

                <div className='team-content'>
                  <div className='team-info'>
                    <h3>Janny Cotller</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    <li>
                      <a href='https://www.facebook.com/' target='_blank'>
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.twitter.com/' target='_blank'>
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/' target='_blank'>
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.gitlab.com/' target='_blank'>
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6'>
              <div className='single-team'>
                <div className='team-image'>
                  <img src='/images/team-image/team4.jpg' alt='image' />
                </div>

                <div className='team-content'>
                  <div className='team-info'>
                    <h3>Jason Statham</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    <li>
                      <a href='https://www.facebook.com/' target='_blank'>
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.twitter.com/' target='_blank'>
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.linkedin.com/' target='_blank'>
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.gitlab.com/' target='_blank'>
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// ===================================BigdataFunFacts====================================//
const BigdataFunFacts = () => {
  return (
    <>
      <div className='funfacts-area bg-image ptb-80'>
        <div className='container'>
          <div className='section-title'>
            <h2>We always try to understand users expectation</h2>
            <div className='bar'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className='row'>
            <div className='col-lg-3 col-md-3 col-6 col-sm-6'>
              <div className='single-funfact'>
                <h3>180K</h3>
                <p>Downloaded</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-3 col-6 col-sm-6'>
              <div className='single-funfact'>
                <h3>20K</h3>
                <p>Feedback</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-3 col-6 col-sm-6'>
              <div className='single-funfact'>
                <h3>500+</h3>
                <p>Workers</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-3 col-6 col-sm-6'>
              <div className='single-funfact'>
                <h3>70+</h3>
                <p>Contributors</p>
              </div>
            </div>
          </div>

          <div className='contact-cta-box'>
            <h3>Have any question about us?</h3>
            <p>Don't hesitate to contact us</p>

            <Link href='/contact' className='btn btn-primary'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
// ===================================Feedback====================================//
const Feedback = () => {
  return (
    <>
      <div className='bigdata-feedback-area pt-80 pb-50'>
        <div className='container'>
          <div className='section-title'>
            <h2>What Users Saying</h2>
            <div className='bar'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className='row justify-content-center'>
            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='single-feedback-box'>
                <div className='feedback-desc'>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsaquaeab illo.</p>
                </div>

                <div className='client-info'>
                  <img src='/images/author1.jpg' alt='image' />
                  <h3>David Luis</h3>
                  <span>Founder & CEO</span>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='single-feedback-box'>
                <div className='feedback-desc'>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsaquaeab illo.</p>
                </div>

                <div className='client-info'>
                  <img src='/images/author2.jpg' alt='image' />
                  <h3>Steven Smith</h3>
                  <span>Developer</span>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='single-feedback-box'>
                <div className='feedback-desc'>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium, totam rem aperiam, eaque ipsaquaeab illo.</p>
                </div>

                <div className='client-info'>
                  <img src='/images/author3.jpg' alt='image' />
                  <h3>Sarah Lucy</h3>
                  <span>Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// ===================================IndustriesWeServe====================================//
const IndustriesWeServe = () => {
  return (
    <>
      <div className='industries-serve-area ptb-80'>
        <div className='container'>
          <div className='section-title'>
            <h2>Industries We Serve</h2>
            <div className='bar'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className='row justify-content-center'>
            <div className='col-lg-3 col-6 col-sm-6 col-md-4'>
              <div className='single-industries-serve-box'>
                <div className='icon'>
                  <i className='bx bx-buildings'></i>
                </div>
                Manufacturing
                <Link href='/service-details' className='link-btn'></Link>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-sm-6 col-md-4'>
              <div className='single-industries-serve-box'>
                <div className='icon'>
                  <i className='bx bx-building-house'></i>
                </div>
                Healthcare
                <Link href='/service-details' className='link-btn'></Link>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-sm-6 col-md-4'>
              <div className='single-industries-serve-box'>
                <div className='icon'>
                  <i className='bx bx-car'></i>
                </div>
                Automobile
                <Link href='/service-details' className='link-btn'></Link>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-sm-6 col-md-4'>
              <div className='single-industries-serve-box'>
                <div className='icon'>
                  <i className='bx bx-credit-card'></i>
                </div>
                Banking
                <Link href='/service-details' className='link-btn'></Link>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-sm-6 col-md-4'>
              <div className='single-industries-serve-box'>
                <div className='icon'>
                  <i className='bx bx-building'></i>
                </div>
                Real Estate
                <Link href='/service-details' className='link-btn'></Link>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-sm-6 col-md-4'>
              <div className='single-industries-serve-box'>
                <div className='icon'>
                  <i className='bx bxs-plane-alt'></i>
                </div>
                Logistics
                <Link href='/service-details' className='link-btn'></Link>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-sm-6 col-md-4'>
              <div className='single-industries-serve-box'>
                <div className='icon'>
                  <i className='bx bx-group'></i>
                </div>
                Insurance
                <Link href='/service-details' className='link-btn'></Link>
              </div>
            </div>

            <div className='col-lg-3 col-6 col-sm-6 col-md-4'>
              <div className='single-industries-serve-box'>
                <div className='icon'>
                  <i className='bx bx-bitcoin'></i>
                </div>
                Capital Markets
                <Link href='/service-details' className='link-btn'></Link>
              </div>
            </div>
          </div>
        </div>

        <div className='analytics-shape2'>
          <img src='/images/bigdata-analytics/vector.png' alt='image' />
        </div>
      </div>
    </>
  );
};
// ===================================BlogPost====================================//
const BlogPost = () => {
  return (
    <>
      <div className='blog-area pt-80 pb-50'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Recent Story</h2>
            <div className='bar'></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post-box bg-f4faff'>
                <div className='entry-thumbnail'>
                  <Link href='/blog-details'>
                    <img src='/images/blog-image/blog1.jpg' alt='image' />
                  </Link>
                </div>

                <div className='entry-post-content'>
                  <div className='entry-meta'>
                    <ul>
                      <li>
                        <Link href='#'>Admin</Link>
                      </li>
                      <li>August 15, 2022</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href='/blog-details'>Making Peace With The Feast Or Famine Of Freelancing</Link>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>

                  <Link href='/blog-details' className='learn-more-btn'>
                    Read Story <Icon.Plus />
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post-box bg-f4faff'>
                <div className='entry-thumbnail'>
                  <Link href='/blog-details'>
                    <img src='/images/blog-image/blog2.jpg' alt='image' />
                  </Link>
                </div>

                <div className='entry-post-content'>
                  <div className='entry-meta'>
                    <ul>
                      <li>
                        <Link href='#'>Admin</Link>
                      </li>
                      <li>August 18, 2022</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href='/blog-details'>I Used The Web For A Day On A 50 MB Budget</Link>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>

                  <Link href='/blog-details' className='learn-more-btn'>
                    Read Story <Icon.Plus />
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-blog-post-box bg-f4faff'>
                <div className='entry-thumbnail'>
                  <Link href='/blog-details'>
                    <img src='/images/blog-image/blog3.jpg' alt='image' />
                  </Link>
                </div>

                <div className='entry-post-content'>
                  <div className='entry-meta'>
                    <ul>
                      <li>
                        <Link href='#'>Admin</Link>
                      </li>
                      <li>August 15, 2022</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href='/blog-details'>Here are the 5 most telling signs of micromanagement</Link>
                  </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>

                  <Link href='/blog-details' className='learn-more-btn'>
                    Read Story <Icon.Plus />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className='shape1'>
          <img src='/images/shape1.png' alt='shape' />
        </div>
        <div className='shape2 rotateme'>
          <img src='/images/shape2.svg' alt='shape' />
        </div>
        <div className='shape3'>
          <img src='/images/shape3.svg' alt='shape' />
        </div>
        <div className='shape4'>
          <img src='/images/shape4.svg' alt='shape' />
        </div>
        <div className='shape6 rotateme'>
          <img src='/images/shape4.svg' alt='shape' />
        </div>
        <div className='shape7'>
          <img src='/images/shape4.svg' alt='shape' />
        </div>
        <div className='shape8 rotateme'>
          <img src='/images/shape2.svg' alt='shape' />
        </div>
      </div>
    </>
  );
};
// ===================================BlogPost====================================//
const NewsletterStyleTwo = () => {
  return (
    <>
      <div className='newsletter-area'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='newsletter-image'>
                <img src='/images/bigdata-analytics/newsletter.jpg' alt='image' />
              </div>
            </div>

            <div className='col-lg-6 col-md-12 p-0'>
              <div className='newsletter-content'>
                <h2>Start your free trial</h2>

                <form className='newsletter-form'>
                  <input type='email' className='input-newsletter' placeholder='Enter your business email here' />
                  <button type='submit'>Sign Up Free</button>
                </form>

                <p>Test out the Big Data Analytics features for 14 days, no credit card required.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Home = (course: any) => {
  console.log('🚀 ~ course:', course);
  return (
    <>
      <MainBanner />

      <WhatWeDo />

      <DiscoverArea />

      <Services />

      <TeamStyleTwo />

      <BigdataFunFacts />

      <Feedback />

      <IndustriesWeServe />

      <BlogPost />

      <NewsletterStyleTwo />
    </>
  );
};

export default Home;
