import Link from 'next/link';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import * as Icon from 'react-feather';
import PageBanner from '@/components/Banner/PageBanner';
import { getPostsByCategories } from '@/services/getPosts';
import CATEGORIES from '@/constants/CATEGORIES';
import moment from 'moment';
import ContactForm from '@/components/Form/ContactForm';

export default function Index() {
  return (
    <>
      <PageBanner pageTitle='QUAN HỆ CỔ ĐÔNG' />
      <div className='agency-services-area pt-80 pb-50'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='agency-services-box'>
                <Link href={`/quan-he-co-dong/${CATEGORIES.GDUC}`}>
                  <img src='/images/agency-image/agency-services-img1.jpg' alt='image' />
                </Link>
                <div className='content'>
                  <h3>
                    <Link href={`/quan-he-co-dong/${CATEGORIES.GDUC}`}>Hồ sơ đăng ký giao dịch Upcom</Link>
                  </h3>
                  <Link href={`/quan-he-co-dong/${CATEGORIES.GDUC}`} className='read-more-btn'>
                    Xem Thêm <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='agency-services-box'>
                <Link href={`/quan-he-co-dong/${CATEGORIES.DHCD}`}>
                  <img src='/images/agency-image/agency-services-img2.jpg' alt='image' />
                </Link>
                <div className='content'>
                  <h3>
                    <Link href={`/quan-he-co-dong/${CATEGORIES.DHCD}`}>Đại hội cổ đông</Link>
                  </h3>
                  <Link href={`/quan-he-co-dong/${CATEGORIES.DHCD}`} className='read-more-btn'>
                    Xem Thêm <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='agency-services-box'>
                <Link href={`/quan-he-co-dong/${CATEGORIES.BCTC}`}>
                  <img src='/images/agency-image/agency-services-img3.jpg' alt='image' />
                </Link>
                <div className='content'>
                  <h3>
                    <Link href={`/quan-he-co-dong/${CATEGORIES.BCTC}`}>Báo cáo tài chính</Link>
                  </h3>
                  <Link href={`/quan-he-co-dong/${CATEGORIES.BCTC}`} className='read-more-btn'>
                    Xem Thêm <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='agency-services-box'>
                <Link href={`/quan-he-co-dong/${CATEGORIES.DLCT}`}>
                  <img src='/images/agency-image/agency-services-img4.jpg' alt='image' />
                </Link>
                <div className='content'>
                  <h3>
                    <Link href={`/quan-he-co-dong/${CATEGORIES.DLCT}`}>Điều lệ công ty</Link>
                  </h3>
                  <Link href={`/quan-he-co-dong/${CATEGORIES.DLCT}`} className='read-more-btn'>
                    Xem Thêm <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='agency-services-box'>
                <Link href={`/quan-he-co-dong/${CATEGORIES.QCQT}`}>
                  <img src='/images/agency-image/agency-services-img5.jpg' alt='image' />
                </Link>
                <div className='content'>
                  <h3>
                    <Link href={`/quan-he-co-dong/${CATEGORIES.QCQT}`}>Quy chế QT nội bộ</Link>
                  </h3>
                  <Link href={`/quan-he-co-dong/${CATEGORIES.QCQT}`} className='read-more-btn'>
                    Xem Thêm <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='agency-services-box'>
                <Link href={`/quan-he-co-dong/${CATEGORIES.BCTN}`}>
                  <img src='/images/agency-image/agency-services-img6.jpg' alt='image' />
                </Link>
                <div className='content'>
                  <h3>
                    <Link href={`/quan-he-co-dong/${CATEGORIES.BCTN}`}>Báo cáo thường niên</Link>
                  </h3>
                  <Link href={`/quan-he-co-dong/${CATEGORIES.BCTN}`} className='read-more-btn'>
                    Xem Thêm <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='agency-services-box'>
                <Link href={`/quan-he-co-dong/${CATEGORIES.BCTH}`}>
                  <img src='/images/agency-image/agency-services-img5.jpg' alt='image' />
                </Link>
                <div className='content'>
                  <h3>
                    <Link href={`/quan-he-co-dong/${CATEGORIES.BCTH}`}>Báo cáo tình hình quản trị công ty</Link>
                  </h3>
                  <Link href={`/quan-he-co-dong/${CATEGORIES.BCTH}`} className='read-more-btn'>
                    Xem Thêm <Icon.PlusCircle />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='agency-services-box'>
                <Link href={`/quan-he-co-dong/${CATEGORIES.CTTK}`}>
                <img src='/images/agency-image/agency-services-img6.jpg' alt='image' />
                </Link>
                <div className='content'>
                  <h3>
                    <Link href={`/quan-he-co-dong/${CATEGORIES.CTTK}`}>Các thông tin khác</Link>
                  </h3>
                  <Link href={`/quan-he-co-dong/${CATEGORIES.CTTK}`} className='read-more-btn'>
                    Xem Thêm <Icon.PlusCircle />
                  </Link>
                </div>
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
      <ContactForm />
    </>
  );
}
