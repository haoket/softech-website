import Link from 'next/link';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import * as Icon from 'react-feather';
import PageBanner from '@/components/Banner/PageBanner';
import { getPostsByCategories } from '@/services/getPosts';
import CATEGORIES from '@/constants/CATEGORIES';
import moment from 'moment';
import { Image } from "@nextui-org/react";
import ContactForm from '@/components/Form/ContactForm';

export default function TuyenDung({ jobs }: Props) {
  return (
    <>
      <PageBanner pageTitle='TUYỂN DỤNG' />
      <Jobs jobs={jobs} />
      <PartnerStyleTwo />
      <ContactForm />
    </>
  );
}


type Props = {
  jobs: any[]
}

const Jobs = ({ jobs }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4;
  // Tính toán số lượng trang
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  // Lấy ra danh sách công việc cho trang hiện tại
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  // Điều hướng đến trang mới
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className='blog-area ptb-80'>
        <div className='container'>
          <div className='row'>
            {currentJobs?.map((job) => (
              <div className='col-lg-6 col-md-6' key={job?.id}>
                <div className='single-blog-post-item'>
                  <div className='post-image'>
                    <Link href={`/tuyen-dung/${job?.friendlyUrl}`}>
                      <Image
                        style={{ width: '100%', height: 'auto' }}
                        src="https://softech.vn/Content/company/images/Tuyen-Dung-Softech.jpg"
                        alt="Default Image"
                        objectFit="cover"
                      />
                    </Link>
                  </div>

                  <div className='post-content'>
                    <ul className='post-meta'>
                      <li>
                        <Link href='#'>Sưu tầm</Link>
                      </li>
                      <li>{moment(job?.createdDate).format("dddd, DD-MM-YYYY")}</li>
                    </ul>
                    <h3>
                      <Link href={`/tuyen-dung/${job?.friendlyUrl}`}>{job?.title}</Link>
                    </h3>

                    <Link href={`/tuyen-dung/${job?.friendlyUrl}`} className='read-more-btn'>
                      Xem Thêm <Icon.PlusCircle />
                    </Link>
                  </div>
                </div>
              </div>
            ))}


            {/* Pagination */}
            <div className='col-lg-12 col-md-12'>
              <div className='pagination-area'>
                <nav aria-label='Page navigation'>
                  <ul className='pagination justify-content-center'>
                    {currentPage === 1 ? '' : (
                      <li className='page-item'>
                        <a className='page-link'
                          href='#'
                          onClick={() => handlePageClick(currentPage - 1)}
                        >
                          Prev
                        </a>
                      </li>
                    )}
                    {Array?.from({ length: totalPages }, (_, i) => (
                      <li key={i}
                        className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                        <a className='page-link'
                          href='#'
                          onClick={() => handlePageClick(i + 1)}>
                          {i + 1}
                        </a>
                      </li>
                    ))}
                    {currentPage === totalPages ? '' : (
                      <li className="page-item">
                        <a className='page-link'
                          href='#'
                          onClick={() => handlePageClick(currentPage + 1)}
                        >
                          Next
                        </a>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>

          </div>
        </div>

        {/* Shape Images */}
        <>
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
        </>
      </div>
    </>
  );
}

const PartnerStyleTwo = () => {
  return (
    <>
      <div className='repair-partner-area bg-f9fafb'>
        <div className='container'>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className='repair-partner-slides'
          >
            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-1.png' alt='image' />
                  <img src='/images/partner-img/partner-hover1.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-2.png' alt='image' />
                  <img src='/images/partner-img/partner-hover2.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-3.png' alt='image' />
                  <img src='/images/partner-img/partner-hover3.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-10.png' alt='image' />
                  <img src='/images/partner-img/partner-hover10.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-5.png' alt='image' />
                  <img src='/images/partner-img/partner-hover5.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-6.png' alt='image' />
                  <img src='/images/partner-img/partner-hover6.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-7.png' alt='image' />
                  <img src='/images/partner-img/partner-hover7.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const categoryID = CATEGORIES.Jobs.toString();
  const jobs = await getPostsByCategories(categoryID);
  return {
    props: {
      jobs
    },
  }
}